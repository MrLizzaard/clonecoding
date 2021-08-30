import React from "react";
import styles from "./dbcut.module.css";
import { useHistory } from "react-router-dom";
import Header from "../header/header";

const Dbcut = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className={styles.dbcut}>
      <Header />
      <button type="button" onClick={handleClick}>
        Home
      </button>
    </div>
  );
};

export default Dbcut;
