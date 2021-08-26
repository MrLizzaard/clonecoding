import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";

const Dbcut = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>DBCUT</h1>
      <Header />
      <button type="button" onClick={handleClick}>
        Home
      </button>
    </div>
  );
};

export default Dbcut;
