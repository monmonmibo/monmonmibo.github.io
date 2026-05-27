import { useCallback, useEffect, useState } from 'react';

function getCacheKey(baseCurrency) {
  return `rate_cache_${baseCurrency}`;
}

function saveToCache(baseCurrency, payload) {
  localStorage.setItem(getCacheKey(baseCurrency), JSON.stringify(payload));
}

function loadFromCache(baseCurrency) {
  try {
    return JSON.parse(localStorage.getItem(getCacheKey(baseCurrency)));
  } catch {
    return null;
  }
}

export default function useCurrencyRate(baseCurrency, { refreshIntervalMs = 5 * 60 * 1000 } = {}) {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState('');
  const [lastUpdatedAt, setLastUpdatedAt] = useState('');
  const [isOffline, setIsOffline] = useState(false);

  const applyRate = (payload, offline = false) => {
    setRate(payload.rate);
    setDate(payload.date);
    setLastUpdatedAt(payload.lastUpdatedAt);
    setIsOffline(offline);
    setError(null);
    setLoading(false);
  };

  const fetchRate = useCallback(async () => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch rate');

    const data = await response.json();
    const nextRate = data?.[baseCurrency]?.hkd;
    if (typeof nextRate !== 'number') throw new Error('Invalid rate payload');

    const payload = {
      rate: nextRate,
      date: data.date || '',
      lastUpdatedAt: new Date().toLocaleString('zh-HK', {
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    saveToCache(baseCurrency, payload);
    applyRate(payload, false);
  }, [baseCurrency]);

  useEffect(() => {
    let active = true;

    const runFetch = async () => {
      try {
        await fetchRate();
      } catch (err) {
        if (!active) return;
        console.error(err);

        const cached = loadFromCache(baseCurrency);
        if (cached) {
          applyRate(cached, true);
        } else {
          setError('無法獲取匯率，請連接網絡後重試');
          setLoading(false);
        }
      }
    };

    runFetch();

    const intervalId = window.setInterval(runFetch, refreshIntervalMs);
    const handleVisibilityChange = () => {
      if (!document.hidden) runFetch();
    };

    window.addEventListener('focus', runFetch);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      active = false;
      window.clearInterval(intervalId);
      window.removeEventListener('focus', runFetch);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fetchRate, refreshIntervalMs, baseCurrency]);

  return { rate, loading, error, date, lastUpdatedAt, isOffline, refresh: fetchRate };
}
