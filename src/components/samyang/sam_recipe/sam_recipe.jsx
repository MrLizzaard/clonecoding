import React from "react";
import { Link } from "react-router-dom";
import styles from "./sam_recipe.module.css";

const SamRecipe = (props) => (
  <div className={styles.recipe}>
    <div className={styles.main_title}>
      <div className={styles.title1}>Recipe</div>
      <div className={styles.title2}>
        이렇게 즐겨보세요! <strong>레시피</strong>
      </div>
    </div>
    <div className={styles.prdList}>
      <ul>
        <li>
          <div className={styles.thumbnail}>
            <Link
              style={{ background: "url(https://www.sydeliciousshop.com/file_data/samyangfoods/2021/08/26/394b0fab006b61759640525ce5c7a06d.jpg)" }}
            ></Link>
          </div>
          <Link>
            <div className={styles.info}>
              <div className={styles.name}>
                <div className={styles.title}>우삼겹 볶음면</div>
                <em className={styles.level}>
                  난이도
                  <img src="https://www.sydeliciousshop.com/morenvyimg/star_02.png" alt="level" />
                </em>
                <span className={styles.hash}>알싸한 후추향이 감도는 우삼겹 볶음면</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <div className={styles.thumbnail}>
            <Link
              style={{ background: "url(https://www.sydeliciousshop.com/file_data/samyangfoods/2021/08/26/a8a08628c0cc47fdde9cfb262a8ea4d4.jpg)" }}
            ></Link>
          </div>
          <Link>
            <div className={styles.info}>
              <div className={styles.name}>
                <div className={styles.title}>핵불닭소스 파스타</div>
                <em className={styles.level}>
                  난이도
                  <img src="https://www.sydeliciousshop.com/morenvyimg/star_02.png" alt="level" />
                </em>
                <span className={styles.hash}>고소한 크린과 매콤한 핵불닭 소스의 조화</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <div className={styles.thumbnail}>
            <Link
              style={{ background: "url(https://www.sydeliciousshop.com/file_data/samyangfoods/2021/08/26/8117cbe4b7c083f590e97b3d2ce4913e.jpg)" }}
            ></Link>
          </div>
          <Link>
            <div className={styles.info}>
              <div className={styles.name}>
                <div className={styles.title}>불닭 소떡소떡</div>
                <em className={styles.level}>
                  난이도
                  <img src="https://www.sydeliciousshop.com/morenvyimg/star_02.png" alt="level" />
                </em>
                <span className={styles.hash}>꼬치에 꽂아 간편한 간식</span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.txt}>우리 시대 라이프스타일과 식문화를 만들어내는 브랜드를 지향합니다.</div>
    <div className={styles.more}>
      <Link>
        <strong>레시피</strong> 더보기 +
      </Link>
    </div>
  </div>
);

export default SamRecipe;
