import React from "react";
import styles from "./sam_mainContents.module.css";
import SamNewArrival from "../sam-new-arrival/sam_newArrival";

const SamMainContents = (props) => (
  <div className={styles.mainContents}>
    <SamNewArrival />
  </div>
);

export default SamMainContents;
