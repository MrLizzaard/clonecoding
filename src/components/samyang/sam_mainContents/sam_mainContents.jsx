import React from "react";
import styles from "./sam_mainContents.module.css";
import SamNewArrival from "../sam-new-arrival/sam_newArrival";
import SamEventBanner from "../sam_eventBanner/sam_eventBanner";

const SamMainContents = (props) => (
  <div className={styles.mainContents}>
    <SamNewArrival />
    <SamEventBanner />
  </div>
);

export default SamMainContents;
