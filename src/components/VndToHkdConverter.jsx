import { useState } from 'react';
import styles from './RateConverter.module.css';
import useCurrencyRate from './useCurrencyRate';

export default function VndToHkdConverter() {
  const [vnd, setVnd] = useState('');
  const { rate, loading, error, date, lastUpdatedAt } = useCurrencyRate('vnd');

  const handleChange = (e) => {
    const val = e.target.value;
    if (val === '' || /^\d*\.?\d*$/.test(val)) {
      setVnd(val);
    }
  };

  const handleReset = () => setVnd('');

  const oneThousandVnd = rate ? (rate * 1000).toFixed(2) : '0.00';
  const formatHKD = (value) => new Intl.NumberFormat('en-HK', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  const displayHKD = vnd && rate ? formatHKD(parseFloat(vnd) * rate) : '0.00';

  if (loading) return <div className={styles.container}><div className={styles.loading}>載入匯率中...</div></div>;
  if (error) return <div className={styles.container}><div className={styles.error}>{error}</div></div>;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>💸 即時匯率計算</h3>

      <div className={styles.inputGroup}>
        <label className={styles.label}>越南盾 (VND)</label>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            inputMode="decimal"
            value={vnd}
            onChange={handleChange}
            placeholder="₫"
            className={styles.input}
          />
          {vnd && (
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
                padding: '5px',
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
        <span className={styles.amount}>{displayHKD}</span>
        <span className={styles.currency}>HKD</span>
      </div>

  <div className={styles.rateInfo}>
        1,000 VND ≈ {formatHKD(oneThousandVnd)} HKD<br />
        更新日期: {date}
        {lastUpdatedAt ? <><br/>最後更新: {lastUpdatedAt}</> : null}
      </div>
    </div>
  );
}
