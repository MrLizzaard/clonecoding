import React from "react";
import { useHistory } from "react-router-dom";

const Dbcut = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>DBCUT</h1>
      <button type="button" onClick={handleClick}>
        Home
      </button>
    </div>
  );
};

export default Dbcut;
