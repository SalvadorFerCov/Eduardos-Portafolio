import React from "react";
import { Image } from "react-bootstrap";
import styles from "./MiniGameBattleRoyal.module.css";

import { Accordion, Container } from "react-bootstrap";

const MiniGameBattleRoyal = () => (
  <div className={styles.content}>
    <div className={styles.title}>
      <h1> Fall Guys: Ultimate Knockout</h1>
      <div className={styles.linkWrapper}>
        <span>Project Proposal</span>
      </div>
    </div>

    <div className={styles.summary}>
      <h2>Summary</h2>
      <p>
        This is a project proposal that I sent to Fall Guys developers Tonic
        games (back then Mediatonic) to apply for a job with them.
      </p>
      <Image
        src={`${process.env.PUBLIC_URL}/minigamebattleroyale1.png`}
        style={{
          maxWidth: 1200,
          maxHeight: 800,
          margin: " 15px",
        }}
      />
      <Image
        src={`${process.env.PUBLIC_URL}/minigamebattleroyale3.png`}
        style={{
          maxWidth: 1200,
          maxHeight: 800,
          margin: " 15px",
        }}
      />
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
                Game Design. Develop the ideas of the minigames, which include:
                technical info such as players, size of arena, objectives, etc.
                Adapted the whole concept to a pre-existing game that offered
                similar gameplay.
              </p>
              <p>
                Game Art. Deliver the direction I wanted for the visual
                examples. worked closely with the artist in charge of it.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p>Game Design notes</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                It all started when I had an idea of a contest where players
                compete in easy minigames and only one wins at the end. When
                Fall Guys made its debut, I knew I had something great and it
                was easier to adapt my ideas into their IP. I took into
                consideration the way the game feels and the way players have
                acted in the game to create fun minigames where these
                expressions are welcomed.
              </p>
              <p>
                Thanks to the amazing talent of @Manlio Perflore (be sure to
                check him out!), the visualization came out amazing. The focus
                was to have a single illustration be able to describe the
                minigame to a new player. I've added a complimentary 2nd screen
                with more detailed information for the purposes of this
                portfolio.
              </p>
              <p>
                Besides the 3 minigames I designed (2 of those didn't receive
                the visual treatment but there is detailed documentation for
                them), I proposed the Variation System.
              </p>
              <p>
                Variation System. Modify an existing minigame and change it
                enough to count it as a different minigame. Rues, objectives,
                and visuals should change, but the base mechanic stays the same.
                These new minigames should always be harder and the rewards
                should match this difficulty.
              </p>
              <p>
                Not only does this affects the perception of players on the
                number of minigames there are but it is easier on the production
                side too. Designing one minigame and some variations of it is
                faster on game design, UX/UI, development, QA, etc than
                designing 2-3 different minigames.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  </div>
);

export default MiniGameBattleRoyal;
