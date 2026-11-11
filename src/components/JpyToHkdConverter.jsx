import CurrencyConverter from './CurrencyConverter';

export default function JpyToHkdConverter() {
  return (
    <CurrencyConverter
      baseCurrency="jpy"
      title="匯率換算"
      inputLabel="日圓 (JPY)"
      placeholder="¥"
      formatResult={(amount, rate) => (amount * rate).toFixed(2)}
      summaryLine={(rate, date) => (
        <>
          100 JPY ≈ {(rate * 100).toFixed(2)} HKD<br />
          匯率日期：{date}
        </>
      )}
    />
  );
}
