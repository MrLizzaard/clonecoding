import React from "react";
import { useHistory } from "react-router-dom";

const MainPage = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/dbcut");
  };
  return (
    <div>
      <h1>MainPage</h1>
      <button type="button" onClick={handleClick}>
        dbcut
      </button>
    </div>
  );
};

export default MainPage;
