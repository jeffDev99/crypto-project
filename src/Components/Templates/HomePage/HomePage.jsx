import React, { useState } from "react";
import { useEffect } from "react";
import { getCoinList } from "../../../Services/CryptoApi/CryptoApi";
import TableCoin from "../../Modules/TableCoin/TableCoin";
import Pagination from "../../Modules/Pagination/Pagination";
import Search from "../../Modules/Search/Search";
import Chart from "../../Modules/Chart/Chart";

export default function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { URL, options } = getCoinList(page, currency);
        const res = await fetch(URL, options);
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        error;
      }
    })();
  }, [page, currency]);
  return (
    <>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin currency={currency} coins={coins} isLoading={isLoading} setChart={setChart}></TableCoin>
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </>
  );
}
