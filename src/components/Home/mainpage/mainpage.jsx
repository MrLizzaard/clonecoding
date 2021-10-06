import React from "react";
import { useHistory } from "react-router-dom";

const MainPage = (props) => {
  const history = useHistory();

  const samhandleClick = () => {
    history.push("/sam");
  };
  return (
    <div>
      <h1>MainPage</h1>
      <button type="button" onClick={samhandleClick}>
        sam
      </button>
    </div>
  );
};

export default MainPage;
