import { useState } from 'react';
import styles from './RateConverter.module.css';
import useCurrencyRate from './useCurrencyRate';

export default function RateConverter() {
  const [jpy, setJpy] = useState('');
  const { rate, loading, error, date, lastUpdatedAt } = useCurrencyRate('jpy');

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
        {lastUpdatedAt ? <><br/>最後更新: {lastUpdatedAt}</> : null}
      </div>
    </div>
  );
}
