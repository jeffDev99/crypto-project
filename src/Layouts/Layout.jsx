import React from "react";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>Seyed Mohammad Amin Jafarnezahd | react.js | <a href="https://github.com/jeffDev99">@jeffdev99</a></p>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>Developed By Seyed Mohammad Amin Jafarnezahd With ❤️</p>
      </footer>
    </>
  );
}
