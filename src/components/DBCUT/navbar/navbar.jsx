import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.mainmenu}>
        <li className={styles.item}>
          <Link to="/dbcut">디렉토리</Link>
        </li>
        <li className={styles.item}>
          <Link to="/dbcut">오픈/리뉴얼</Link>
        </li>
        <li className={styles.item}>
          <Link to="/dbcut">외국사이트</Link>
        </li>
        <li className={styles.item}>
          <Link to="/dbcut">웹에이전시</Link>
        </li>
        <li className={styles.item}>
          <Link to="/dbcut">모바일</Link>
        </li>
        <li className={styles.item}>
          <Link to="/dbcut">반응형</Link>
        </li>
        <li className={styles.item}>
          <Link to="/dbcut">워드프레스</Link>
        </li>
        <li className={styles.item}>
          <Link to="/dbcut">구인구직</Link>
        </li>
        <li className={styles.item}>
          <Link to="/dbcut">제작의뢰</Link>
        </li>
        <li className={styles.item}>
          <Link to="/dbcut">커뮤니티</Link>
        </li>
        <li className={styles.item}>
          <Link to="/dbcut">팀블로그</Link>
        </li>
      </ul>
      <div className="topNotice">공지사항 : 보안인증서 연장을 깜박해 https 연결에 문제가 있었습니다.(1)</div>
      <div className="topSearch">
        <form>
          <select name="where" title="검색필드">
            <option value="ALL">전체</option>
            <option value="Title">제목</option>
            <option value="Context">본문</option>
            <option value="Comment">코멘트</option>
            <option value="File">파일</option>
          </select>
          <input type="text" />
          <input type="image" src="https://www.dbcut.com/bbs/template/header/h1000_250/image/search.gif" alt="검색하기" />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
