import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam_newArrival.module.css";

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
                    <img src="https://www.sydeliciousshop.com/web/product/big/538_thum_gift2.png" alt="불닭" />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <img src="https://www.sydeliciousshop.com/web/upload/icon_202108241601308600.png" alt="장바구니" />
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.name}>
                  <Link>
                    <span>[페퍼밀] 불타는 루추볶음면 8입+후추맛사지볼 세트</span>
                  </Link>
                </div>
                <div className={styles.salebox}>
                  <div className={styles.sale_bg}>
                    <span className={styles.saleText}>27%</span>
                  </div>
                </div>
                <ul className={styles.spec}>
                  <li className={styles.salesPrice}>
                    <span>11,900원</span>
                  </li>
                  <li className={styles.customerPrice}>
                    <span>16,500원</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.box}>
              <div className={styles.thumbnail}>
                <div className={styles.prdImg}>
                  <Link to="#">
                    <img src="https://www.sydeliciousshop.com/web/product/big/562_thum.png" alt="불닭맛장" />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <img src="https://www.sydeliciousshop.com/web/upload/icon_202108241601308600.png" alt="장바구니" />
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.name}>
                  <Link>
                    <span>[삼양식품] 불닭맛장 200g</span>
                  </Link>
                </div>
                <div className={styles.salebox}>
                  <div className={styles.sale_bg}>
                    <span className={styles.saleText}>20%</span>
                  </div>
                </div>
                <ul className={styles.spec}>
                  <li className={styles.salesPrice}>
                    <span>4,000원</span>
                  </li>
                  <li className={styles.customerPrice}>
                    <span>5,000원</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.box}>
              <div className={styles.thumbnail}>
                <div className={styles.prdImg}>
                  <Link to="#">
                    <img src="https://www.sydeliciousshop.com/web/product/big/202108/3a73b98ae4a7df8f3bbabd1e37524a69.png" alt="딸기전병" />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <img src="https://www.sydeliciousshop.com/web/upload/icon_202108241601308600.png" alt="장바구니" />
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.name}>
                  <Link>
                    <span>[삼양목장] 우유로 만든 딸기전병 8g x 18입</span>
                  </Link>
                </div>
                <div className={styles.salebox}>
                  <div className={styles.sale_bg}>
                    <span className={styles.saleText}>5%</span>
                  </div>
                </div>
                <ul className={styles.spec}>
                  <li className={styles.salesPrice}>
                    <span>11,400원</span>
                  </li>
                  <li className={styles.customerPrice}>
                    <span>12,000원</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.box}>
              <div className={styles.thumbnail}>
                <div className={styles.prdImg}>
                  <Link to="#">
                    <img src="	https://www.sydeliciousshop.com/web/product/big/561_thum.png" alt="짜장마요" />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <img src="https://www.sydeliciousshop.com/web/upload/icon_202108241601308600.png" alt="장바구니" />
                </div>
              </div>
              <div className={styles.description}>
                <div className={styles.name}>
                  <Link>
                    <span>[삼양식품] 짜장이라구요 120g x 4입</span>
                  </Link>
                </div>
                <div className={styles.salebox}>
                  <div className={styles.sale_bg}>
                    <span className={styles.saleText}>20%</span>
                  </div>
                </div>
                <ul className={styles.spec}>
                  <li className={styles.salesPrice}>
                    <span>4,160원</span>
                  </li>
                  <li className={styles.customerPrice}>
                    <span>5,200원</span>
                  </li>
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
