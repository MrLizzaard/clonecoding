import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam_eventBanner.module.css";

const SamEventBanner = (props) => (
  <div className={styles.eventBanner}>
    <Link>
      <div className={styles.event1}></div>
    </Link>
  </div>
);

export default SamEventBanner;
