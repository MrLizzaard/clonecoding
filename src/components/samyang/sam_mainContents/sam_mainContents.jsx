import React from "react";
import styles from "./sam_mainContents.module.css";
import SamNewArrival from "../sam-new-arrival/sam_newArrival";
import SamEventBanner from "../sam_eventBanner/sam_eventBanner";
import SamDisplay1 from "../sam_display1/sam_display1";
import SamDisplay2 from "../sam_display2/sam_display2";

const SamMainContents = (props) => (
  <div className={styles.mainContents}>
    <SamNewArrival />
    <SamEventBanner />
    <SamDisplay1 />
    <SamDisplay2 />
  </div>
);

export default SamMainContents;
