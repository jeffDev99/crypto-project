import React, { useEffect, useState } from "react";
import { searchCoin } from "../../../Services/CryptoApi/CryptoApi.js";
import { MagnifyingGlass } from "react-loader-spinner";
import styles from "./Search.module.css";

export default function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }

    try {
      const search = async () => {
        const res = await fetch(searchCoin(text), { signal: controller.signal });
        const data = await res.json();
        if (data.coins) {
          setCoins(data.coins);
          setIsLoading(false);
        } else {
          alert(data.status.error_message);
        }
      };
      setIsLoading(true);
      search();
    } catch (error) {
      if (error.name !== "AbortError") {
        alert(error.message);
      }
    }

    return () => {
      controller.abort();
    };
  }, [text]);
  return (
    <div className={styles.serachBox}>
      <input type="text" placeholder="search..." value={text} onChange={(e) => setText(e.target.value)} />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {(!!coins.length || isLoading) && (
        <div className={styles.searchResult}>
          {isLoading && (
            <MagnifyingGlass visible={true} height="80" width="80" ariaLabel="magnifying-glass-loading" wrapperStyle={{}} wrapperClass="magnifying-glass-wrapper" glassColor="#c0efff" color="#fff" />
          )}

          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
