import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import MainPage from "./components/Home/mainpage/mainpage";
import SamMain from "./components/samyang/sam_main/sam_main";

const App = (props) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/sam">
            <SamMain />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
