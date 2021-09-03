import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./sam_header.module.css";

const SamHeader = (props) => {
  const inputRef = useRef();
  const handleMouseDown = () => {
    inputRef.current.placeholder = "";
  };
  const handleBlur = () => {
    inputRef.current.placeholder = "검색어를 입력하세요";
  };

  return (
    <div className={styles.header}>
      <div className={styles.sec1}>
        {/* 로그인 메뉴 */}
        <ul className={styles.login}>
          <li>
            <Link to="#">회원가입</Link>
          </li>
          <li>
            <Link to="#">로그인</Link>
          </li>
          <li>
            <Link to="#">고객센터</Link>
          </li>
        </ul>
        {/* 상단 로고 */}
        <div className={styles.logo}>
          <Link to="#">
            <img src="https://www.sydeliciousshop.com/morenvyimg/mh_logo.png" alt="logo" />
          </Link>
        </div>
        {/* 검색창 */}
        <div className={styles.searchBox}>
          <div className={styles.boxInner}>
            <form className={styles.searchBarForm}>
              <div className={styles.searchInput}>
                <fieldset title="검색어를 입력하세요">
                  <input
                    ref={inputRef}
                    className={styles.keyword}
                    placeholder="검색어를 입력하세요"
                    autoComplete="off"
                    type="text"
                    onMouseDown={handleMouseDown}
                    onBlur={handleBlur}
                  />
                  <input type="image" alt="검색" src="https://www.sydeliciousshop.com/morenvyimg/mh_search.png" />
                </fieldset>
              </div>
            </form>
          </div>
        </div>
        {/* 검색 드롭다운 */}
        <div className={styles.searchDetail}>
          <div className={styles.popular}>
            <div className={styles.popularTitle}>인기검색어</div>
            <ul>
              <li>
                <Link to="#">#불닭</Link>
              </li>
              <li>
                <Link to="#">#불타는 시리즈</Link>
              </li>
              <li>
                <Link to="#">#로제</Link>
              </li>
              <li>
                <Link to="#">#삼양60주년</Link>
              </li>
              <li>
                <Link to="#">#추석선물</Link>
              </li>
              <li>
                <Link to="#">#킨조</Link>
              </li>
              <li>
                <Link to="#">#삼양라면</Link>
              </li>
              <li>
                <Link to="#">#비건</Link>
              </li>
              <li>
                <Link to="#">#뽀빠이</Link>
              </li>
              <li>
                <Link to="#">#치즈</Link>
              </li>
            </ul>
          </div>
          <div className={styles.recent}>
            <div className={styles.popularTitle}>
              최근검색어
              <span>
                모두 지우기
                <img src="https://www.sydeliciousshop.com/morenvyimg/recent_all.png" alt="x" />
              </span>
            </div>
            <ul></ul>
          </div>
          <div className={styles.close}>
            <img src="https://www.sydeliciousshop.com/morenvyimg/sd_close.png" alt="close button" />
          </div>
        </div>
        <ul className={styles.user}>
          <li>
            <Link to="#">
              <img src="https://www.sydeliciousshop.com/morenvyimg/mh_order.png" alt="truck" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="https://www.sydeliciousshop.com/morenvyimg/mh_mypage.png" alt="truck" />
            </Link>
          </li>
          <li className={styles.cart}>
            <Link to="#">
              <img src="https://www.sydeliciousshop.com/morenvyimg/mh_cart.png" alt="truck" />
              <span>0</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.sec2}>
        <div className={styles.mainCategory}>
          <ul className={styles.categoryList}>
            <li>
              <Link to="#">
                <img src="https://www.sydeliciousshop.com/morenvyimg/mh_fold.png" alt="hamburger" className={styles.fold} />
                삼양식품
              </Link>
            </li>
            <li>
              <Link to="#">맛샵PICK</Link>
            </li>
            <li>
              <Link to="#">굿즈샵</Link>
            </li>
            <li>
              <Link to="#">명절선물세트</Link>
            </li>
            <li>
              <Link to="#">이벤트</Link>
            </li>
            <li>
              <Link to="#">삼양플레이</Link>
            </li>
          </ul>
          <div className={styles.cateArea}>
            <div className={styles.allCate}>
              <ul className={styles.moreAllCategory}>
                <li>
                  <Link>삼양식품</Link>
                  <div className={styles.sub}>
                    <ul className={styles.depth2}>
                      <li>
                        <Link to="#">불닭브랜드</Link>
                      </li>
                      <li>
                        <Link to="#">삼양브랜드</Link>
                      </li>
                      <li>
                        <Link to="#">라면</Link>
                      </li>
                      <li>
                        <Link to="#">소스</Link>
                      </li>
                      <li>
                        <Link to="#">스낵</Link>
                      </li>
                      <li>
                        <Link to="#">삼양목장</Link>
                      </li>
                      <li>
                        <Link to="#">간편식품</Link>
                      </li>
                      <li>
                        <Link to="#">냉동식품</Link>
                      </li>
                      <li>
                        <Link to="#">유제품</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link>맛샵PICK</Link>
                  <div className={styles.sub}>
                    <ul className={styles.depth2}>
                      <li>
                        <Link to="#">불타는시리즈</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link>굿즈샵</Link>
                  <div className={styles.sub}>
                    <ul className={styles.depth2}>
                      <li>
                        <Link>불타는 시리즈</Link>
                      </li>
                      <li>
                        <Link>온라인전용</Link>
                      </li>
                      <li>
                        <Link>삼양굿즈</Link>
                      </li>
                      <li>
                        <Link>불닭굿즈</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link>명절선물세트</Link>
                  <div className={styles.sub}>
                    <ul className={styles.depth2}>
                      <li>
                        <Link>추석선물세트</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link>이벤트</Link>
                  <div className={styles.sub}>
                    <ul className={styles.depth2}>
                      <li>
                        <Link>이벤트</Link>
                      </li>
                      <li>
                        <Link>기획전</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link>삼양플레이</Link>
                  <div className={styles.sub}>
                    <ul className={styles.depth2}>
                      <li>
                        <Link>페퍼Story</Link>
                      </li>
                      <li>
                        <Link>삼양 Recipe</Link>
                      </li>
                      <li>
                        <Link>삼양유니버스</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamHeader;
