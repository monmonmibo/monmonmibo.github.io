import CurrencyConverter from './CurrencyConverter';

export default function VndToHkdConverter() {
  const formatHKD = (value) => new Intl.NumberFormat('en-HK', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return (
    <CurrencyConverter
      baseCurrency="vnd"
      title="💸 即時匯率計算"
      inputLabel="越南盾 (VND)"
      placeholder="₫"
      formatResult={(amount, rate) => formatHKD(amount * rate)}
      summaryLine={(rate, date) => (
        <>
          1,000 VND ≈ {formatHKD(rate * 1000)} HKD<br />
          更新日期: {date}
        </>
      )}
    />
  );
}
