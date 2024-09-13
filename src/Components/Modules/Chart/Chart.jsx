import React, { useState } from "react";
import styles from "./Chart.module.css";
import convertData from "../../../Helpers/convertData";
import ChartComponent from "../ChartComponent/ChartComponent";
export default function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  const typeHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      const typeValue = e.target.innerText.toLowerCase().replace(" " , "_")
      setType(typeValue)
    }
  };
  return (
    <div className={styles.container}>
      <span onClick={() => setChart(false)} className={styles.cross}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt={chart.coin.name} srcSet="" />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types} onClick={typeHandler}>
          <button className={type==="prices" ? styles.selected : null}>Prices</button>
          <button className={type==="market_caps" ? styles.selected : null}>Market Caps</button>
          <button className={type==="total_volumes" ? styles.selected : null}>Total Volumes</button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices : </p>
            <span>${chart.coin.current_price}</span>
          </div>{" "}
          <div>
            <p>ATH : </p>
            <span>${chart.coin.ath}</span>
          </div>{" "}
          <div>
            <p>Market Cap : </p>
            <span>${chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
