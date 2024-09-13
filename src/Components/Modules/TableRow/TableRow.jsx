import chartUp from "../../../assets/chart-up.svg";
import chartDown from "../../../assets/chart-down.svg";
import styles from "./TableRow.module.css";
import { marketChart } from "../../../Services/CryptoApi/CryptoApi";

export default function TableRow({ currency, setChart, coin }) {
  const { id, image, symbol, name, current_price, price_change_percentage_24h: price_change, total_volume } = coin;
  const showChartHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      setChart({...json , coin});
    } catch (error) {
      setChart(false);
    }
  };
  return (
    <tr>
      <td className={styles.symbol} onClick={showChartHandler}>
        <div>
          <img src={image} alt={name} />
        </div>
        <span>{symbol.toUpperCase()}</span>
      </td>
      <td>{name}</td>
      <td>
        {currency === "usd" ? "$" : currency === "eur" ? "€" : currency === "jpy" && "¥"}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {currency === "usd" ? "$" : currency === "eur" ? "€" : currency === "jpy" && "¥"}
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}%</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
}
