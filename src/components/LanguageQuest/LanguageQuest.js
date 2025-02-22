import React from "react";
import styles from "./LanguageQuest.module.css";
import { Accordion, Container, Image } from "react-bootstrap";

const LanguageQuest = () => (
  <div className={styles.content}>
    <div className={styles.title}>
      <h1> Language Quest: Magnolia and the Lost City </h1>
      <div className={styles.linkWrapper}>
        <a href="https://edponi.itch.io/language-quest-magnolia-and-the-lost-city">
          Link to game page{" "}
        </a>
      </div>
    </div>

    <div className={styles.summary}>
      <h2>Summary</h2>
      <p>
        Language Quest: Magnolia and the Lost City is part of a Master Thesis
        project and not intended for any sale purposes.
        <br></br> <br></br>
        Language Quest is a language-RPG game that puts you in the shoes of
        Magnolia, a foreigner in the fictional city of Puerto Luna. By solving
        language puzzles and battling enemies in real time, players will be able
        to understand basic ideas, words and phrases in Spanish.
      </p>
      <div className={styles.cards}>
        <div className={styles.relativeWrapper}>
          <div className={styles.cardDescription}>
            Jobs play a multifaceted role in Language Quest, serving as: Income
            Generation, Language Learning and Combat Abilities.
          </div>
          <Image
            className={styles.cardImages}
            rounded
            src={`${process.env.PUBLIC_URL}/language_quest_image_1.png`}
          />
        </div>
        <div className={styles.relativeWrapper}>
          <div className={styles.cardDescription}>
            In Language Quest, battles primarily take place within Magnolia's
            mind. This unique combat system blends action and strategy for an
            engaging experience.
          </div>
          <Image
            className={styles.cardImages}
            rounded
            src={`${process.env.PUBLIC_URL}/language_quest_image_2.png`}
          />
        </div>
      </div>
    </div>

    <div className={styles.myWork}>
      <Container>
        <h2>My Work</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item
            eventKey="0"
            style={{
              backgroundColor: "#253551",
              color: "white",
              paddingTop: "30px",
            }}
          >
            <Accordion.Header>
              <p>Roles and responsibilities</p>
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <p>
                  As the sole Game Designer and Producer for this master's
                  thesis project, I was responsible for all aspects of the
                  game's creation, from initial concept to final delivery. This
                  involved a diverse range of tasks, including:
                </p>
                <p>
                  <b>Game Design </b>
                </p>
                <ul>
                  <li>
                    Conceptualized and designed the core gameplay mechanics,
                    narrative structure, and overall game vision.{" "}
                  </li>
                  <li>
                    Developed detailed game systems, including rules,
                    progression, and player interactions.{" "}
                  </li>
                  <li>
                    Oversaw the creation of all game assets, ensuring
                    consistency with the artistic direction.{" "}
                  </li>
                  <li>
                    Collaborated with the artist to define the visual style and
                    ensure its integration with the game's design.{" "}
                  </li>
                  <li>
                    Worked with the developer to implement gameplay features and
                    refine the player experience.{" "}
                  </li>
                </ul>
                <p>
                  <b>Game Production </b>
                </p>
                <ul>
                  <li>
                    Managed the project timeline, ensuring all milestones were
                    met within the university's tight deadline.
                  </li>
                  <li>
                    Utilized Trello for task management, progress tracking, and
                    team communication.
                  </li>
                  <li>
                    Created and maintained a comprehensive Game Design Document
                    (GDD) to serve as a living blueprint for the project.
                  </li>
                  <li>
                    Facilitated communication and collaboration between the
                    development team (artist and developer).
                  </li>
                  <li>
                    Ensured the project stayed within scope and met the required
                    quality standards for the thesis submission.
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            style={{ backgroundColor: "#253551", color: "white" }}
          >
            <Accordion.Header>
              <p>Game Design notes</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A central goal was to teach a language through gameplay.
                Understanding that language is deeply connected to context, we
                prioritized creating a truly immersive environment. Working
                closely with the artist, we designed a town reminiscent of my
                hometown, paying close attention to colors, architecture, and
                even the types of stores. The{" "}
                <a
                  href={`${process.env.PUBLIC_URL}/language_quest_gdd.pdf`}
                  target="_blank"
                  rel="no noreferrer"
                  style={{ color: "white" }}
                >
                  GDD
                </a>{" "}
                elaborates on the language learning mechanics and the research
                behind them.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  </div>
);

export default LanguageQuest;
