import React from "react";
import styles from "./sam_preference.module.css";

const SamPreference = (props) => (
  <div className={styles.preference}>
    <div className={styles.inner}>
      <div className={styles.title}>
        <img src="https://www.sydeliciousshop.com/morenvyimg/choose_title.png" alt="logo" />
      </div>
      <ul className={styles.tab}>
        <li></li>
        <li></li>
      </ul>
      <ul className={styles.choose}>
        <li>
          <img src="https://www.sydeliciousshop.com/morenvyimg/choose_txt01.png" alt="logo" />
          <ul className={styles.chooseList}>
            <li>든든함</li>
            <li>간편함</li>
            <li>독특함</li>
            <span></span>
            <li>혼술</li>
            <li>여행</li>
            <li>비건</li>
          </ul>
        </li>
      </ul>
      <div className={styles.blink}>
        <img src="https://www.sydeliciousshop.com/morenvyimg/choose_salt.png" alt="cat" />
        <ul className={styles.glasses}>
          <li>
            <div>
              <img src="https://www.sydeliciousshop.com/morenvyimg/salt_glass.png" alt="glass" />
              <img src="https://www.sydeliciousshop.com/morenvyimg/salt_glass.png" alt="glass" />
            </div>
          </li>
          <li>
            <div>
              <img src="https://www.sydeliciousshop.com/morenvyimg/salt_glass.png" alt="glass" />
              <img src="https://www.sydeliciousshop.com/morenvyimg/salt_glass.png" alt="glass" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SamPreference;
