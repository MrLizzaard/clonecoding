import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam_brand.module.css";

const SamBrand = (props) => (
  <div className={styles.brand}>
    <div className={styles.mainTitle}>
      <div className={styles.title1}>Samyang Brand</div>
      <div className={styles.title2}>
        <strong>브랜드스토리</strong>
      </div>
      <div className={styles.title3}>
        삼양식품은 제품의 고급화와 맛과 영양의 차별화를 위해 질 높은 천연원료를 사용하여
        <br />
        한국적이고 전통적인 맛을 지닌 우수식품을 공급하고 있습니다.
      </div>
    </div>
    <div className={styles.hochi}>
      <img src="https://www.sydeliciousshop.com/morenvyimg/cloud01.png" alt="cloud" className={styles.cloud1} />
      <img src="https://www.sydeliciousshop.com/morenvyimg/cloud02.png" alt="cloud" className={styles.cloud2} />
      <img src="https://www.sydeliciousshop.com/morenvyimg/hochi.png" alt="hochi" className={styles.hochiImg} />
    </div>
    <div className={styles.swiper}>
      <ul className={styles.swiperWrapper}>
        <li className={styles.slide}>
          <div>1963</div>
          <img src="https://www.sydeliciousshop.com/morenvyimg/brand01.png" alt="1963" />
        </li>
        <li className={styles.slide}>
          <div>1970</div>
          <img src="https://www.sydeliciousshop.com/morenvyimg/brand02.png" alt="1970" />
        </li>
        <li className={styles.slide}>
          <div>1972</div>
          <img src="https://www.sydeliciousshop.com/morenvyimg/brand03.png" alt="1972" />
        </li>
        <li className={styles.slide}>
          <div>1973</div>
          <img src="https://www.sydeliciousshop.com/morenvyimg/brand04.png" alt="1973" />
        </li>
        <li className={styles.slide}>
          <div>2012</div>
          <img src="https://www.sydeliciousshop.com/morenvyimg/brand05.png" alt="2012" />
        </li>
        <li className={styles.slide}>
          <div>2020</div>
          <img src="https://www.sydeliciousshop.com/morenvyimg/brand06.png" alt="2020" />
        </li>
        <li className={styles.slide}>
          <div>2021</div>
          <img src="https://www.sydeliciousshop.com/morenvyimg/brand07.png" alt="2021" />
        </li>
      </ul>
    </div>
    <div className={styles.more}>
      <Link>
        <strong>브랜드스토리</strong> 더보기 +
      </Link>
    </div>
  </div>
);

export default SamBrand;
