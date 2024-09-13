import React from "react";
import TableRow from "../TableRow/TableRow";
import { Grid } from 'react-loader-spinner'
import styles from "./TableCoin.module.css"

export default function TableCoin({ coins, isLoading , currency , setChart }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Grid visible={true} height="80" width="80" color="#fff" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{}} wrapperClass="grid-wrapper" />
      ) : (
        <table  className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Valume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow currency={currency} key={coin.id} coin={coin} setChart={setChart} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
