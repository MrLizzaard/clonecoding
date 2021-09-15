import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam_display2.module.css";

const SamDisplay2 = (props) => (
  <div className={styles.display}>
    <div className={styles.mainTitle}>
      <div className={styles.title1}>MD's Pick</div>
      <div className={styles.title2}>
        직원들이 픽! 했다 <strong>엠디픽</strong>
      </div>
    </div>
    <div className={styles.products}>
      <ul className={styles.prdList}>
        <li>
          <div className={styles.box}>
            <div className={styles.thumbnail}>
              <div className={styles.prdImg}>
                <Link>
                  <img src="https://www.sydeliciousshop.com/web/product/big/209_thum_5.png" alt="prod" />
                </Link>
              </div>
              <div className={styles.icon}>
                <img src="https://www.sydeliciousshop.com/web/upload/icon_202108241601308600.png" alt="장바구니" />
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.summary}>
                <Link>#핵폭탄급 #매운맛</Link>
              </div>
              <div className={styles.sales}>
                <div className={styles.salesBg}>
                  <span className={styles.saleText}>20%</span>
                </div>
              </div>
              <ul className={styles.price}>
                <li className={styles.sell}>
                  <span>4,200원</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.box}>
            <div className={styles.thumbnail}>
              <div className={styles.prdImg}>
                <Link>
                  <img src="https://www.sydeliciousshop.com/web/product/big/533_thum.png" alt="prod" />
                </Link>
              </div>
              <div className={styles.icon}>
                <img src="https://www.sydeliciousshop.com/web/upload/icon_202108241601308600.png" alt="장바구니" />
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.summary}>
                <Link>#2kg 대용량</Link>
              </div>
              <div className={styles.sales}>
                <div className={styles.salesBg}>
                  <span className={styles.saleText}>20%</span>
                </div>
              </div>
              <ul className={styles.price}>
                <li className={styles.sell}>
                  <span>24,800원</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.box}>
            <div className={styles.thumbnail}>
              <div className={styles.prdImg}>
                <Link>
                  <img src="https://www.sydeliciousshop.com/web/product/big/528_thum.png" alt="prod" />
                </Link>
              </div>
              <div className={styles.icon}>
                <img src="https://www.sydeliciousshop.com/web/upload/icon_202108241601308600.png" alt="장바구니" />
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.summary}>
                <Link>#달달 #짱구 #액션가면</Link>
              </div>
              <div className={styles.sales}>
                <div className={styles.salesBg}>
                  <span className={styles.saleText}>20%</span>
                </div>
              </div>
              <ul className={styles.price}>
                <li className={styles.sell}>
                  <span>1,200원</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.box}>
            <div className={styles.thumbnail}>
              <div className={styles.prdImg}>
                <Link>
                  <img src="https://www.sydeliciousshop.com/web/product/big/45_thum.png" alt="prod" />
                </Link>
              </div>
              <div className={styles.icon}>
                <img src="https://www.sydeliciousshop.com/web/upload/icon_202108241601308600.png" alt="장바구니" />
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.summary}>
                <Link>#닭볶음탕 #안주</Link>
              </div>
              <div className={styles.sales}>
                <div className={styles.salesBg}>
                  <span className={styles.saleText}>18%</span>
                </div>
              </div>
              <ul className={styles.price}>
                <li className={styles.sell}>
                  <span>1,310원</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default SamDisplay2;
