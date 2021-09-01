import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam_header.module.css";

const SamHeader = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.sec1}>
        {/* 로그인 메뉴 */}
        <ul className={styles.login}>
          <li>
            <Link to="#">회원가입</Link>
          </li>
          <li>
            <Link to="#">로그인</Link>
          </li>
          <li>
            <Link to="#">고객센터</Link>
          </li>
        </ul>
        {/* 상단 로고 */}
        <div className={styles.logo}>
          <Link to="#">
            <img src="https://www.sydeliciousshop.com/morenvyimg/mh_logo.png" alt="logo" />
          </Link>
        </div>
        {/* 검색창 */}
        <div className={styles.searchBox}>
          <div className={styles.boxInner}>
            <form className={styles.searchBarForm}>
              <div className={styles.searchInput}>
                <fieldset title="검색어를 입력하세요">
                  <input className={styles.keyword} placeholder="검색어를 입력하세요" type="text" />
                  <input type="image" alt="검색" src="https://www.sydeliciousshop.com/morenvyimg/mh_search.png" />
                </fieldset>
              </div>
            </form>
          </div>
        </div>
        {/* 검색 드롭다운 */}
        <div className={styles.searchDetail}>
          <div className={styles.popular}></div>
          <div className={styles.recent}></div>
          <div className={styles.close}></div>
        </div>
      </div>
      <div className={styles.sec2}></div>
    </div>
  );
};

export default SamHeader;
