import React from "react";
import Home from "../Home/Home";
// import PropTypes from 'prop-types';
import styles from "./App.module.css";

const App = () => (
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
        <Home />
      </div>
    </div>
  </div>
);

// App.propTypes = {};

// App.defaultProps = {};

export default App;
