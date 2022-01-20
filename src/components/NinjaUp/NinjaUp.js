import React from "react";
import styles from "./NinjaUp.module.css";
import PicText from "../PicText/PicText";

const renderNinjaUpGamePlay = () => (
  <div>
    <h2>Back of the box description</h2>

    <div>
      <p>Jump your way into space with the most daring and cool pixel ninja!</p>
      <p>
        Join the endless run action. Draw lines to create new springboards for
        your ninja to jump from so he can bounce his way up and up!​​​​​​​
      </p>
    </div>

    <ul>
      <li>
        Dodge or try to hit a flurry of cool enemies from ninjas to fun UFOs.
      </li>
      <li>
        The shorter the rope, the higher and faster you will jump. Will you take
        the risk?
      </li>
      <li>Unlock all the fun jump master characters and new pixel costumes.</li>
    </ul>
  </div>
);

const renderNinjaUpGameDesign = () => (
  <div>
    <h2>Game Design thought process and notes</h2>
    <p>
      This was a special case because the game was already done by another team
      but the studio wanted to relaunch it with more features. The approach we
      took was to look into what made it special and just add more ways for that
      special component to shine. We identified 2 special components: the
      jumping mechanic and costumes.
    </p>
    <ul>
      <li>
        Jumping mechanic: We wanted to give the player more ways to keep jumping
        and trying to reach new heights so we came up with the idea of power
        ups. Extra lifes, invincibility for a short amount of time, hyper jump,
        among others. We also added a EX jump after consecutive successful risky
        jumps to reward users with high skill.
      </li>
      <li>
        Costumes: The original had 10 costumes that mainly varied from color. We
        decided to include 20+ costumes with different themes like animal,
        job-related, music genre and even some pop-culture references. We then
        decided to give the original 10 costumes a challenge associated to
        unlock them. You purchased a random drop using Coins gained from various
        sources: during your run, by hitting a special enemy and at the end of
        your run based on your performance.
      </li>
    </ul>
  </div>
);

const NinjaUp = () => (
  <div>
    <div className={styles.content}>
      <h1> Ninja Up! </h1>
      <PicText
        imgFileName="ninja4.png"
        textFirst
        figCaption="Draw lines for your ninja to bounce off of, trying to go up and reach the best height possible in an endless sea of challenges. "
      >
        {renderNinjaUpGamePlay()}
      </PicText>
      <div className={styles.picSideBySide}>
        <PicText imgFileName="ninja5.png" textFirst></PicText>
        <PicText imgFileName="ninja2.png" textFirst></PicText>
      </div>
      <div>
        <h2> Roles and responsibilities</h2>
        <p>
          Producer: In charge of managing the team of developers, game
          designers, technical artists, QA so we could hit the established
          deadlines. Also planning the schedule of development and communicating
          it with the Production manager.
        </p>
        <p>
          Game Design: Worked with the other game designer to come up with the
          power-ups ideas, bonus rounds. I also helped with the random drop
          rules, % of rarity and logistics of it.
        </p>
        <p>
          Game Art: Worked with the technical artists to come up with themes for
          the costumes.
        </p>
      </div>
      {renderNinjaUpGameDesign()}
      {/* <PicText imgFileName="ninja5.png" textFirst>
      </PicText> */}
    </div>
  </div>
);

export default NinjaUp;
