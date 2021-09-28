import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam_footer.module.css";

const SamFooter = (props) => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <ul className={styles.sns}>
        <li>
          <Link>
            <img src="https://www.sydeliciousshop.com/morenvyimg/mf_facebook.png" alt="facebook" />
          </Link>
        </li>
        <li>
          <Link>
            <img src="https://www.sydeliciousshop.com/morenvyimg/mf_insta.png" alt="instrgram" />
          </Link>
        </li>
        <li>
          <Link>
            <img src="https://www.sydeliciousshop.com/morenvyimg/mf_youtube.png" alt="Youtube" />
          </Link>
        </li>
        <li>
          <Link>
            <img src="https://www.sydeliciousshop.com/morenvyimg/mf_blog.png" alt="naver blog" />
          </Link>
        </li>
      </ul>
      <ul className={styles.menu}>
        <li>
          <Link>회사소개</Link>
        </li>
        <li>
          <Link>이용약관</Link>
        </li>
        <li>
          <Link className={styles.privacy}>개인정보처리방침</Link>
        </li>
        <li>
          <Link>이용안내</Link>
        </li>
      </ul>
      <div className={styles.cs}>
        <ul>
          <li>삼양맛샵 고객센터 (주문/배송)</li>
          <li>080.850.3072</li>
          <li>AM 9:30~ PM 17:40 (Lunch Time PM 12:00~13:00 / 토, 일, 공휴일 휴무</li>
        </ul>
        <ul>
          <li>삼양식품 고객지원센터 (제품/품질)</li>
          <li>080.850.3333</li>
          <li>AM 9:30~ PM 17:30 (Lunch Time PM 12:00~13:00 / 토, 일, 공휴일 휴무</li>
        </ul>
        <ul className={styles.center}>
          <li>
            <Link>1:1문의</Link>
          </li>
          <li>
            <Link>고객센터</Link>
          </li>
        </ul>
      </div>
      <div className={styles.info}>
        <div className={styles.infoLeft}></div>
        <div className={styles.infoRight}></div>
      </div>
    </div>
  </div>
);

export default SamFooter;
