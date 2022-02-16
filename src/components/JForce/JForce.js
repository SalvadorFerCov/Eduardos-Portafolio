import React from "react";
import styles from "./JForce.module.css";

import { Accordion, Container, Ratio } from "react-bootstrap";

const JForce = () => (
  <div className={styles.content}>
    <div className={styles.title}>
      <h1> J Force</h1>
      <div className={styles.linkWrapper}>
        <a href="https://globalgamejam.org/2020/games/j-squad-1">
          Link to game page{" "}
        </a>
      </div>
    </div>

    <div className={styles.summary}>
      <h2>Summary</h2>
      <p>
        Co-operative multiplayer where you have to fix/repair the different
        machines in order to survive. Coordination and communication are
        everything!
      </p>
      <div style={{ maxWidth: 660, height: "auto", margin: "auto" }}>
        <Ratio aspectRatio="16x9">
          <iframe
            src="https://www.youtube.com/embed/CzYlqci0MHk"
            title="J Force: Gameplay Mechanics"
          ></iframe>
        </Ratio>
      </div>
    </div>

    <div className={styles.myWork}>
      <Container>
        <h2>My Work</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <p>Roles and responsibilities</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Producer. In charge of managing the team of developers and
                technical artists so we could hit the established deadline.
                Coordinating the team and taking decisions on what to keep/cut.
              </p>
              <p>
                Game Design. Develop the whole concept of the game, the
                minigames and their mechanics, the genre, and the narrative.
                Balanced all minigames mechanics.
              </p>
              <p>
                Game Art. Helped the technical artists to come up with the theme
                and mood of the game.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p>Game Design notes</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                This project was developed at the Global Game Jam 2020, where I
                participated as a Game Designer and Producer. The theme was
                "Fix".
              </p>
              <p>
                From the first time I thought of the game, I always thought of
                it as a multiplayer experience, because many times, fixing
                anything is easier if you have someone that supports you. Thanks
                to the amazing work of our Lead Eng, we were able to implement a
                4 player co-op experience. Also, since it is
                multiplayer-focused, that means multiple machines can break at
                the same time, leaning on the cooperation factor more.
              </p>
              <p>
                I strived to create a fun cooperative experience that demanded
                some skill of the players but I also added certain randomness to
                it so no game was the same. To have this, I designed various
                mechanics that elevate this concept.
              </p>
              <p>
                Chaos manager. There is a manager that controls when a machine
                will break. It is based on randomness but takes into account how
                easy or difficult it is to fix the machine.
              </p>
              <p>
                Harder every time. Each time a machine breaks, the minigame
                becomes more difficult to complete.
              </p>
              <p>
                Hiding the HP bar sets the tension right from the start and adds
                to the frantic communication.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  </div>
);

export default JForce;
