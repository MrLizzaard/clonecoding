import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam-new-arrival.module.css";

const SamNewArrival = (props) => {
  return (
    <div className={styles.newArrival}>
      <div className={styles.titles}>
        <div className={styles.title1}>New Arrival</div>
        <div className={styles.title2}>
          늘 새롭게 <strong>신상품</strong>
        </div>
      </div>

      <div className={styles.products}>
        <ul className={styles.prodList}>
          <li className={styles.item}>
            <div className={styles.box}>
              <div className={styles.thumbnail}>
                <div className={styles.prdImg}>
                  <Link to="#">
                    <img src="" alt="" />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.name}>
                  <Link>
                    <span></span>
                  </Link>
                </div>
                <div className={styles.salebox}>
                  <div className={styles.sale_bg}>
                    <span className={styles.saleText}></span>
                  </div>
                </div>
                <ul className={styles.spec}>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.box}>
              <div className={styles.thumbnail}>
                <div className={styles.prdImg}>
                  <Link to="#">
                    <img src="" alt="" />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.name}>
                  <Link>
                    <span></span>
                  </Link>
                </div>
                <div className={styles.salebox}>
                  <div className={styles.sale_bg}>
                    <span className={styles.saleText}></span>
                  </div>
                </div>
                <ul className={styles.spec}>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.box}>
              <div className={styles.thumbnail}>
                <div className={styles.prdImg}>
                  <Link to="#">
                    <img src="" alt="" />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.name}>
                  <Link>
                    <span></span>
                  </Link>
                </div>
                <div className={styles.salebox}>
                  <div className={styles.sale_bg}>
                    <span className={styles.saleText}></span>
                  </div>
                </div>
                <ul className={styles.spec}>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.box}>
              <div className={styles.thumbnail}>
                <div className={styles.prdImg}>
                  <Link to="#">
                    <img src="" alt="" />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.name}>
                  <Link>
                    <span></span>
                  </Link>
                </div>
                <div className={styles.salebox}>
                  <div className={styles.sale_bg}>
                    <span className={styles.saleText}></span>
                  </div>
                </div>
                <ul className={styles.spec}>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SamNewArrival;
