import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.mainmenu}>
        <ul>
          <li>
            <Link to="/dbcut">디렉토리</Link>
          </li>
          <li>
            <Link to="/dbcut"></Link>
          </li>
          <li>
            <Link to="/dbcut"></Link>
          </li>
          <li>
            <Link to="/dbcut"></Link>
          </li>
          <li>
            <Link to="/dbcut"></Link>
          </li>
          <li>
            <Link to="/dbcut"></Link>
          </li>
          <li>
            <Link to="/dbcut"></Link>
          </li>
          <li>
            <Link to="/dbcut"></Link>
          </li>
          <li>
            <Link to="/dbcut"></Link>
          </li>
          <li>
            <Link to="/dbcut"></Link>
          </li>
          <li>
            <Link to="/dbcut"></Link>
          </li>
        </ul>
      </div>
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
