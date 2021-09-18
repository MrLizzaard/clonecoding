import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam_diary.module.css";

const SamDiary = (props) => (
  <div className={styles.diary}>
    <div className={styles.mainTitle}>
      <div className={styles.title1}>Pepper Story</div>
      <div className={styles.title2}>
        페퍼와 솔트의 <strong>일기</strong>
      </div>
    </div>
    <div className={styles.story}>
      <ul>
        <li>
          <Link className={`${styles.pepperImg} ${styles.one}`}></Link>
          <Link className={styles.pepperTitle}>
            <span className={styles.chapter}>Ep.29</span>
            <div className={styles.title}>{`<페퍼그릇 썸머에디션>`}</div>
          </Link>
        </li>
        <li>
          <Link className={`${styles.pepperImg} ${styles.two}`}></Link>
          <Link className={styles.pepperTitle}>
            <span className={styles.chapter}>Ep.28</span>
            <div className={styles.title}>{`<여름휴가, 어디로갈까?>`}</div>
          </Link>
        </li>
        <li>
          <Link className={`${styles.pepperImg} ${styles.three}`}></Link>
          <Link className={styles.pepperTitle}>
            <span className={styles.chapter}>Ep.27</span>
            <div className={styles.title}>{`<짜.장.이.라.구.요!>`}</div>
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.more}>
      <Link>
        <strong>페퍼스토리</strong>더보기 +
      </Link>
    </div>
  </div>
);

export default SamDiary;
