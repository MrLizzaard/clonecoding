import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="https://www.dbcut.com/bbs/template/header/h1000_250/image/top_logo.gif" alt="logo" />
      </Link>
      <ul className={styles.topmenu}>
        <li className={styles.item}>현재접속회원:0명</li>
        <li className={styles.item}>매니아랭킹</li>
        <li className={styles.item}>최근코멘트</li>
        <li className={styles.item}>회원가입</li>
      </ul>
      <Navbar />
    </div>
  );
};

export default Header;
