import { useId, useState } from 'react';
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
  // Ties the visible label to the field; without it the input has no name
  const inputId = useId();
  const [value, setValue] = useState('');
  const { rate, loading, error, date, lastUpdatedAt, isOffline } = useCurrencyRate(baseCurrency);

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
        <label className={styles.label} htmlFor={inputId}>{inputLabel}</label>
        <div className={styles.inputWrap}>
          <input
            id={inputId}
            type="text"
            inputMode="decimal"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={styles.input}
          />
          {value && (
            <button
              type="button"
              onClick={handleReset}
              className={styles.clearBtn}
              aria-label="清除輸入"
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

      {isOffline && (
        <div className={styles.offlineBanner}>
          📵 離線中，顯示上次儲存匯率
        </div>
      )}
      <div className={styles.rateInfo}>
        {summaryLine(rate, date)}
        {lastUpdatedAt ? <><br />最後更新: {lastUpdatedAt}</> : null}
      </div>
    </div>
  );
}
