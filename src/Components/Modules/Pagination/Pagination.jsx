import React, { useState } from "react";
import styles from "./Pagination.module.css";

export default function Pagination({ page, setPage }) {
  const prevHandler = () => {
    if (page <= 1) {
      return;
    }
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 10) {
      return;
    }
    setPage((page) => page + 1);
  };
  return (
    <div className={styles.pagination}>
      <button onClick={prevHandler} className={page === 1 ? styles.disabled : ""}>
        previous
      </button>
      <p className={page === 1 ? styles.selected : ""}>{1}</p>
      <p className={page === 2 ? styles.selected : ""}>{2}</p>
      <p>...</p>
      {page > 2 && page < 9 && (
        <>
          <p className={styles.selected}>{page}</p>
          <p>...</p>
        </>
      )}
      <p className={page === 9 ? styles.selected : ""}>{9}</p>
      <p className={page === 10 ? styles.selected : ""}>{10}</p>
      <button onClick={nextHandler} className={page === 10 ? styles.disabled : ""}>
        next
      </button>
    </div>
  );
}
