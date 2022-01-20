import React from "react";
import styles from "./JForce.module.css";
import GridPicText from "../GridPicText/GridPicText";
import Figure from "../Figure/Figure";

const renderJForceGameDesign = () => (
  <div>
    <h2>Game Design thought process and notes</h2>
    <p>
      This project was developed at the Global Game Jam 2020, where I
      participated as a Game Designer and Producer. The theme was "Fix".
    </p>
    <p>
      From the first time I thought of the game, I always thought of it as a
      multiplayer experience, because many times, fixing anything is easier if
      you have someone that supports you. Thanks to the amazing work of our Lead
      Eng, we were able to implement a 4 player co-op experience.
    </p>
    <p>
      I strived to create a fun cooperative experience that demanded some skill
      of the players but I also added certain randomness to it so no game was
      the same. In order to have this, I designed various simple minigames that
      started easy but could become increasingly harder.
    </p>
    <p>
      Machines are the main gameplay loop. They crash using a system we
      nicknamed the “Chaos Manager”. This pulls a random number and depending on
      the probability of each machine, they may or may not break down.
    </p>
    <p>
      The machines can break down all at the same time so constant communication
      is key, which makes for a fun couple of sessions. Hiding the HP bar sets
      the tension right from the start and adds to the frantic communication.
    </p>
  </div>
);

const backOFTheBox = () => (
  <div className={styles.backOfTheBox}>
    <h2>Back of the box description</h2>
    <p>
      Co-operative multiplayer where you have to fix/repair the different
      machines in order to survive. Coordination and communication are
      everything!
    </p>
    <ul>
      <li>
        Machines will start breaking down and you and your team need to fix
        them.
      </li>
      <li>
        If a machine is broken down, get ready to enter a minigame to fix it.
        From pressing the A button repeatedly to hitting it a single time for a
        precise action, each machine is different.
      </li>
      <li>
        If a machine continues to be broken down, it will drain the HP of the
        team and if the HP reaches 0, is Game Over. Survive for 5 minutes to
        win!
      </li>
    </ul>
  </div>
);

const JForce = () => (
  <div>
    <div className={styles.content}>
      <h1>J Force </h1>
      <a href="https://globalgamejam.org/2020/games/j-squad-1">
        Link to game page{" "}
      </a>
      {backOFTheBox()}
      <div className={styles.sideBySidePics}>
        <GridPicText
          caption="Utilize various mechanics to fix the different machines."
          imgFileNames={[
            "Copy_of_press_a.png",
            "jforce_buttons.png",
            "jforce_dpad.png",
            "jforce_rotate.png",
          ]}
        ></GridPicText>
        <Figure
          imgFileName="jforce1.png"
          figCaption="Various machines can and will break down simultaneously. Coordinate with your team on how to tix and escape together."
        />
      </div>
      <div>
        <h2> Roles and responsibilities</h2>
        <p>
          <span className={styles.highlightWord}>Producer.</span> In charge of
          managing the team of developers and technical artists so we could hit
          the established deadline. Coordinating the team and taking decisions
          on what to keep/cut.
        </p>
        <p>
          <span className={styles.highlightWord}>Game Design.</span> Develop the
          whole concept of the game, the minigames and their mechanics, the
          genre, and the narrative. Balanced all minigames mechanics.
        </p>
        <p>
          <span className={styles.highlightWord}>Game Art.</span> Helped the
          technical artists to come up with the theme and mood of the game.
        </p>
      </div>
      {renderJForceGameDesign()}
      {/* <PicText imgFileName="jforce1.png" textFirst>
      </PicText> */}
    </div>
  </div>
);

export default JForce;
