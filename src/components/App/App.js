import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../Home/Home";
import NinjaUp from "../NinjaUp/NinjaUp";
// import PropTypes from 'prop-types';
import styles from "./App.module.css";

const App = () => (
  <Router>
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
            <Route path="/Eduardos-Portafolio" exact>
              <Home />
            </Route>
            <Route path="/Eduardos-Portafolio/Ninja Up!" exact>
              <NinjaUp />  
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

// App.propTypes = {};

// App.defaultProps = {};

export default App;
