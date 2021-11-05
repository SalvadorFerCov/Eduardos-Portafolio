import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "../Home/Home";
import JForce from "../JForce/JForce";
import NinjaUp from "../NinjaUp/NinjaUp";
import styles from "./App.module.css";

const App = () => (
  <HashRouter basename="Eduardos-Portafolio">
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/background.jpg"})`,
      }}
    >
      <div className={styles.content}>
        <div className={styles.navBar}>
          <li>Nav Bar</li>
          <li>Nav Bar</li>
        </div>
        <div className={styles.data}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Ninja Up!" exact>
              <NinjaUp />
            </Route>
            <Route path="/J Force" exact>
              <JForce />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </HashRouter>
);

export default App;
