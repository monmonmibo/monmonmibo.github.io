import { useState } from 'react';
import styles from './CurrencyConverter.module.css';
import useCurrencyRate from './useCurrencyRate';

export default function CurrencyConverter({
  baseCurrency,
  title,
  inputLabel,
  placeholder,
  formatResult,
  summaryLine,
}) {
  const [value, setValue] = useState('');
  const { rate, loading, error, date, lastUpdatedAt } = useCurrencyRate(baseCurrency);

  const handleChange = (e) => {
    const nextValue = e.target.value;
    if (nextValue === '' || /^\d*\.?\d*$/.test(nextValue)) {
      setValue(nextValue);
    }
  };

  const handleReset = () => setValue('');

  const displayValue = value && rate ? formatResult(parseFloat(value), rate) : '0.00';

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>載入匯率中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.inputGroup}>
        <label className={styles.label}>{inputLabel}</label>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            inputMode="decimal"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={styles.input}
          />
          {value && (
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
        <span className={styles.amount}>{displayValue}</span>
        <span className={styles.currency}>HKD</span>
      </div>

      <div className={styles.rateInfo}>
        {summaryLine(rate, date)}
        {lastUpdatedAt ? <><br />最後更新: {lastUpdatedAt}</> : null}
      </div>
    </div>
  );
}
