import React from "react";
// import PropTypes from "prop-types";
import styles from "./PicText.module.css";

// TO-DO make reusable
const PicText = () => (
  <div className={styles.PicText}>
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/melee.jpg`,
        width: 400,
        height: 400,
      }}
      className={styles.background}
    />
    <div className={styles.content}>
      <h2>Gameplay</h2>
      <ul>
        <li>
          Dodge or try to hit a flurry of cool enemies from ninjas to fun UFOs.
        </li>
        <li>
          Draw lines for your ninja to bounce off of, trying to go up and reach
          the best height possible in an endless sea of challenges.
        </li>
        <li>
          The shorter the rope, the higher and faster you will jump. Will you
          take the risk?
        </li>
        <li>
          Discover cool ninja power-ups  that will help you reach incredible
          heights.
        </li>
        <li>
          Unlock all the fun jump master characters and new pixel costumes.
        </li>
        <li>Challenge your friends or compete in global leaderboards.</li>
      </ul>
    </div>
  </div>
);

PicText.propTypes = {};

PicText.defaultProps = {};

export default PicText;
