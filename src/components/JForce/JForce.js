import React from "react";
import styles from "./JForce.module.css";
import PicText from "../PicText/PicText";

const renderJForceGamePlay = () => (
  <>
    <h2>Gameplay</h2>
    <ul>
      <li>
        Machines are the main gameplay loop. They crash using a system we
        nicknamed the “Chaos Manager”. This pulls a random number and depending
        on the probability of each machine, they may or may not break down.
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
  </>
);

const renderJForceGameDesign = () => (
  <>
    <h2>Game Design thought process and notes</h2>
    <p>
      This project was developed at the Global Game Jam 2020, where I
      participated as a Game Designer and Producer. The theme was "Fix".
    </p>
    <ul>
      <li>
        From the first time I thought of the game, I always thought of it as a
        multiplayer experience. Thanks to the amazing work of our Lead Eng, we
        were able to implement a 4 player co-op experience.
      </li>
      <li>
        Creating a fun cooperative experience demanded skills of the player but
        I added a certain randomness to it so no game was the same. In order to
        have this, I designed various simple minigames that started easy but
        could become increasingly harder.
      </li>
      <li>
        The machines can break down all at the same time so constant
        communication is key, which makes for a fun couple of sessions. Hiding
        the HP bar sets the tension right from the start and adds to the frantic
        communication.
      </li>
    </ul>
  </>
);

const JForce = () => (
  <div>
    <div className={styles.content}>
      <h1> J Force</h1>
      <p>
        Co-operative multiplayer where you have to fix/repair the different
        machines in order to survive. Coordination and communication is
        everything!
      </p>
      <PicText imgFileName="jforce2.png"> {renderJForceGamePlay()}</PicText>
      <div>
        <h1> Roles and responsibilities</h1>
        <p>
          Producer: In charge of managing the team of developers and technical
          artists so we could hit the established deadline. Coordinating the
          team and take decisions on what to keep/cut.
        </p>
        <p>
          Game Design: Develop the whole concept of the game, the minigames and
          their mechanics, the genre and the narrative. Balanced all minigames
          mechanics.
        </p>
        <p>
          Game Art: Helped the technical artists to come up with the theme and
          mood of the game.
        </p>
      </div>
      <PicText imgFileName="jforce1.png" picFirst>
        {renderJForceGameDesign()}
      </PicText>
    </div>
  </div>
);

export default JForce;
