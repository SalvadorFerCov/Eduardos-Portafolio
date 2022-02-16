import React from "react";
import styles from "./NinjaUp.module.css";
import { Accordion, Container, Image } from "react-bootstrap";

const NinjaUp = () => (
  <div className={styles.content}>
    <div className={styles.title}>
      <h1> Ninja Up! </h1>
      <div className={styles.linkWrapper}>
        <a href="https://www.gameloft.com/en/game/ninja-up-mobile/">
          Link to game page{" "}
        </a>
      </div>
    </div>

    <div className={styles.summary}>
      <h2>Summary</h2>
      <p>
        Jump your way into space with the most daring and cool pixel ninja! Join
        the endless run action. Draw lines to create new springboards for your
        ninja to jump from so he can bounce his way up and up!
      </p>
      <div className={styles.cards}>
        <div className={styles.relativeWrapper}>
          <div className={styles.cardDescription}>
            Drawing shorter lines will make the ninja go higher and faster.
          </div>
          <Image
            className={styles.cardImages}
            rounded
            src={`${process.env.PUBLIC_URL}/ninja4.png`}
          />
        </div>
        <div className={styles.relativeWrapper}>
          <div className={styles.cardDescription}>
            You can challenge your friends for the highest score or rank up in
            the global leaderboards.{" "}
          </div>
          <Image
            className={styles.cardImages}
            rounded
            src={`${process.env.PUBLIC_URL}/ninja2.png`}
          />
        </div>
        <div className={styles.relativeWrapper}>
          <div className={styles.cardDescription}>
            You can obtain cool ninja power-ups like shurikens that block
            ninjas, a hyper jumo that makes you invulnerable or even extra
            lives.
          </div>
          <Image
            className={styles.cardImages}
            rounded
            src={`${process.env.PUBLIC_URL}/ninja5.png`}
          />
        </div>
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
                Producer: In charge of managing the team of developers, game
                designers, technical artists, QA so we could hit the established
                deadlines. Also planning the schedule of development and
                communicating it with the Production manager.
              </p>
              <p>
                Game Design: Worked with the other game designer to come up with
                the power-ups ideas, bonus rounds. I also helped with the random
                drop rules, % of rarity and logistics of it.
              </p>
              <p>
                Game Art: Worked with the technical artists to come up with
                themes for the costumes.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p>Game Design notes</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                This was a special case because the game was already done by
                another team but the studio wanted to relaunch it with more
                features so our team was tasked with this job. I was involved in
                the production and development cycle process from start to
                finish, as we had to:
              </p>
              <p>
                Game Design and Production. We analyzed the mechanics of the
                original game and updated the gameplay. We wanted to give the
                player more ways to keep jumping and trying to reach new heights
                so we came up with the idea of power-ups, extra lives,
                invincibility for a short amount of time, hyperjump, among
                others. We also added an EX jump after consecutive successful
                risky jumps to reward users with high skill.
              </p>
              <p>
                Development. The original game was using outdated technologies
                so we decided to remake the game in Unity. This helped us in the
                long run as bugs and libraries were much easier to fix and
                implement.
              </p>
              <p>
                Art. The original had 10 costumes that mainly varied in color.
                We decided to include 20+ costumes with different themes like
                animal, job-related, music genre, and even some pop-culture
                references. We then decided to give the original 10 costumes a
                challenge associated to unlock them. You purchased a random drop
                using Coins gained from various sources: during your run, by
                hitting a special enemy, and at the end of your run based on
                your performance.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  </div>
);

export default NinjaUp;
