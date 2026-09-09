import CurrencyConverter from './CurrencyConverter';

export default function ThbToHkdConverter() {
  const formatHKD = (value) => new Intl.NumberFormat('en-HK', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return (
    <CurrencyConverter
      baseCurrency="thb"
      title="💵 即時匯率計算"
      inputLabel="泰銖 (THB)"
      placeholder="฿"
      formatResult={(amount, rate) => formatHKD(amount * rate)}
      summaryLine={(rate, date) => (
        <>
          100 THB ≈ {formatHKD(rate * 100)} HKD<br />
          更新日期: {date}
        </>
      )}
    />
  );
}
