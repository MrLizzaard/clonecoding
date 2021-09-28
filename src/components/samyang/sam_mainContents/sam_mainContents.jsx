import React from "react";
import styles from "./sam_mainContents.module.css";
import SamNewArrival from "../sam-new-arrival/sam_newArrival";
import SamEventBanner from "../sam_eventBanner/sam_eventBanner";
import SamDisplay1 from "../sam_display1/sam_display1";
import SamDisplay2 from "../sam_display2/sam_display2";
import SamPreference from "../sam_preference/sam_preference";
import SamDiary from "../sam_diary/sam_diary";
import SamBrand from "../sam_brand/sam_brand";
import SamRecipe from "../sam_recipe/sam_recipe";
import SamEvent from "../sam_event/sam_event";

const SamMainContents = (props) => (
  <div className={styles.mainContents}>
    <SamNewArrival />
    <SamEventBanner />
    <SamDisplay1 />
    <SamDisplay2 />
    <SamPreference />
    <SamDiary />
    <SamBrand />
    <SamRecipe />
    <SamEvent />
  </div>
);

export default SamMainContents;
