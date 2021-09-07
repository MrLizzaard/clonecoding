import React from "react";
import { Link } from "react-router-dom";
import SamHeader from "../header/sam_header";
import SamNewArrival from "../sam-new-arrival/sam_newArrival";
import SamCarousel from "../sam_carousel/sam_carousel";
import styles from "./sam_main.module.css";

const SamMain = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.topBanner}>
        <Link to="#" className={styles.a}>
          리뉴얼 런칭 기념 <span>30% 할인 쿠폰 증정</span>
        </Link>
      </div>
      <SamHeader />
      <SamCarousel />
      <SamNewArrival />
    </div>
  );
};

export default SamMain;
