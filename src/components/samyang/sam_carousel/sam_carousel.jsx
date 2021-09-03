import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam_carousel.module.css";

const SamCarousel = (props) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.wrapper}>
        <div className={styles.slide}>
          <Link>
            <img src="https://www.sydeliciousshop.com/morenvyimg/main_05.jpg" alt="딸기전병" />
          </Link>
        </div>
        <div className={styles.slide}>
          <Link>
            <img src="	https://www.sydeliciousshop.com/morenvyimg/main_01.jpg" alt="비밀번호" />
          </Link>
        </div>
        <div className={styles.slide}>
          <Link>
            <img src="https://www.sydeliciousshop.com/morenvyimg/main_02.jpg" alt="삼양리뉴얼" />
          </Link>
        </div>
        <div className={styles.slide}>
          <Link>
            <img src="https://www.sydeliciousshop.com/morenvyimg/main_03.jpg" alt="추석맞이" />
          </Link>
        </div>
        <div className={styles.slide}>
          <Link>
            <img src="https://www.sydeliciousshop.com/morenvyimg/main_04.jpg" alt="레트로포차" />
          </Link>
        </div>
      </div>
      <div className={styles.bullets}>
        <span className={styles.bullet} tabIndex="0" role="button"></span>
        <span className={styles.bullet} tabIndex="0" role="button"></span>
        <span className={styles.bullet} tabIndex="0" role="button"></span>
        <span className={styles.bullet} tabIndex="0" role="button"></span>
        <span className={styles.bullet} tabIndex="0" role="button"></span>
      </div>
      <div className={styles.btnNext}></div>
      <div className={styles.btnPrev}></div>
    </div>
  );
};

export default SamCarousel;
