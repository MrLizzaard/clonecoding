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
          <li className={styles.footerTitle}>삼양맛샵 고객센터 (주문/배송)</li>
          <li>080.850.3072</li>
          <li>AM 9:30~ PM 17:40 (Lunch Time PM 12:00~13:00 / 토, 일, 공휴일 휴무</li>
        </ul>
        <ul>
          <li className={styles.footerTitle}>삼양식품 고객지원센터 (제품/품질)</li>
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
        <div className={styles.infoLeft}>
          삼양식품(주) <span></span>대표자: 정태운, 진종기 <span></span>개인정보책임자 : 삼양식품(주) <br />
          주소: 02737 서울특별시 성북구 오패산로3길 104 (하월곡동) 삼양식품 <span></span>Tel. 080-850-3072 <span></span>
          <br />
          이메일 : abcde@samyangfoods.com <br />
          반품교환주소 : 경기 하남 서하남로123길 12-34 성윤로지스 <br /> 사업자등록번호 123-45-67890
          <span></span>[사업자정보확인] <span></span> 통신판매업신고번호 [2016-가나다-0000] <br />
        </div>
        <div className={styles.infoRight}>
          <ul>
            <li>
              <img src="https://www.sydeliciousshop.com/morenvyimg/ucert_black.gif" alt="" />
            </li>
            <li>
              <img src="https://www.sydeliciousshop.com/morenvyimg/inipay.png" alt="" />
            </li>
            <li>
              <img src="https://www.sydeliciousshop.com/morenvyimg/escrow.png" alt="" />
            </li>
          </ul>
          <div className={styles.copy}>COPYRIGHT © 삼양맛샵 ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </div>
  </div>
);

export default SamFooter;
