import React from "react";
// import PropTypes from "prop-types";
import styles from "./NinjaUp.module.css";
import PicText from "../PicText/PicText";

const NinjaUp = () => (
  <div className={styles.NinjaUp}>
    <div className={styles.content}>
      <h1> Ninja Up! </h1>
      <p>Jump your way into space with the most daring and cool pixel ninja!</p>
      <p>
        Join the endless run action. Draw lines to create new springboards for
        your ninja to jump from so he can bounce his way up and up!​​​​​​​
      </p>
      <PicText />
      <div>
        <h1> Roles and responsibilities</h1>
        <p>
          Producer: In charge of managing the team of developers, game
          designers, technical artists, QA so we could hit the established
          deadlines. Also planning the schedule of development and communicating
          it with the Production manager.
        </p>
        <p>
          Game Design: Worked with the other game designer to come up with the
          power-ups ideas, bonus rounds. I also helped with the random drop
          rules, % of rarity and logistics of it.
        </p>
        <p>
          Game Art: Worked with the technical artists to come up with themes for
          the costumes.
        </p>
      </div>
    </div>
  </div>
);

NinjaUp.propTypes = {};

NinjaUp.defaultProps = {};

export default NinjaUp;
