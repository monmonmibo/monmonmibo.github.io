import { useState, useEffect } from 'react';
import styles from './RateConverter.module.css';

export default function RateConverter() {
  const [rate, setRate] = useState(null);
  const [jpy, setJpy] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    // API URL for JPY base currency
    const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/jpy.json';

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch rate');
        return res.json();
      })
      .then(data => {
        // Access nested data: data.jpy.hkd
        const hkdRate = data.jpy.hkd;
        setRate(hkdRate);
        setDate(data.date);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('無法獲取匯率');
        setLoading(false);
      });
  }, []);

  const handleJpyChange = (e) => {
    const val = e.target.value;
    if (val === '' || /^\d*\.?\d*$/.test(val)) {
      setJpy(val);
    }
  };

  const handleReset = () => {
    setJpy('');
  };

  const hkd = jpy && rate ? (parseFloat(jpy) * rate).toFixed(2) : '0.00';

  if (loading) return <div className={styles.container}><div className={styles.loading}>載入匯率中...</div></div>;
  if (error) return <div className={styles.container}><div className={styles.error}>{error}</div></div>;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>💴 即時匯率計算</h3>
      
      <div className={styles.inputGroup}>
        <label className={styles.label}>日圓 (JPY)</label>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            inputMode="decimal"
            value={jpy}
            onChange={handleJpyChange}
            placeholder="¥"
            className={styles.input}
          />
          {jpy && (
            <button 
              onClick={handleReset}
              style={{
                position: 'absolute',
                right: '10px',
                background: 'none',
                border: 'none',
                color: '#999',
                fontSize: '1.2rem',
                cursor: 'pointer',
                padding: '5px'
              }}
              aria-label="Clear input"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className={styles.divider}>⬇️</div>

      <div className={styles.result}>
        <span className={styles.amount}>{hkd}</span>
        <span className={styles.currency}>HKD</span>
      </div>

      <div className={styles.rateInfo}>
        100 JPY ≈ {(rate * 100).toFixed(2)} HKD<br/>
        更新日期: {date}
      </div>
    </div>
  );
}
