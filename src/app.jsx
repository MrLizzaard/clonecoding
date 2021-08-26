import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Dbcut from "./components/DBCUT/DBCUT/dbcut";
import MainPage from "./components/Home/mainpage/mainpage";

const App = (props) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/dbcut">
            <Dbcut />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
