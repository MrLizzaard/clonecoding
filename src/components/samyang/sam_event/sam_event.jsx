import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam_event.module.css";

const SamEvent = (props) => (
  <div className={styles.event}>
    <div className={styles.mainTitle}>
      <div className={styles.title1}>
        <strong>이벤트&기획전</strong>
      </div>
    </div>
    <div className={styles.prdList}>
      <ul>
        <li>
          <Link>
            <div className={styles.thumbnail}>
              <img src="https://www.sydeliciousshop.com/file_data/samyangfoods/2021/09/17/5f98c35a33e9f32e147594576e92c642.jpg" alt="thumb" />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>
                <div className={styles.title}>삼양 창립 60주년 기념 '가치 나눔' 기부 이벤트</div>
                <em className={styles.period}>2021.09.27~2021.10.26</em>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <div className={styles.thumbnail}>
              <img src="https://www.sydeliciousshop.com/file_data/samyangfoods/2021/09/14/80186e0b2d78d1559e8b0522861c6ff4.jpg" alt="thumb" />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>
                <div className={styles.title}>[이벤트] 짜짜로니 천하제일 요리대회</div>
                <em className={styles.period}>2021.09.17~2021.10.17</em>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.tv}>
      <div className={styles.mainTitle}>
        <div className={styles.title1}>
          <strong>삼양 TV</strong>
        </div>
      </div>
      <div className={styles.mainVod}>
        <ul>
          <ul className={styles.tvlist}>
            <li className={styles.item}>
              <div className={styles.thumb}>
                <iframe
                  id="player0"
                  className={styles.player}
                  frameborder="0"
                  allowfullscreen="1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  src="https://www.youtube.com/embed/JTxq6PbYjAg"
                  width="1280"
                  height="700"
                ></iframe>
              </div>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
);

export default SamEvent;
