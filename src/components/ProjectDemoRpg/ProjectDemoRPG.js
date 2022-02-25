import React from "react";
import styles from "./ProjectDemoRPG.module.css";

import { Accordion, Container, Image } from "react-bootstrap";

const ProjectDemoRPG = () => (
  <div className={styles.content}>
    <div className={styles.title}>
      <h1> Project: Sky Castle</h1>
    </div>
    <div className={styles.summary}>
      <h2>Summary</h2>
      <p>
        In this world, civilization has the ability to wield different types of
        Magic, namely control the very energy that surrounds them. Our conflict
        will take us to one of the continents of this world and see the events
        that unfold there.
      </p>
      <p>
        Play as the best friend of the heroine, who is trying to become the
        Queen and lead her small kingdom in the sky to prosperity, and see the
        story from another perspective.
      </p>
    </div>

    <div className={styles.cards}>
      <div className={styles.flexWrapper}>
        <Image
          className={styles.cardImages}
          rounded
          src={`${process.env.PUBLIC_URL}/X-strike.png`}
        />
        <p style={{ backgroundColor: "#253551", color: "white", padding:'15px' }}>
          During combat, unleash devastating Combos with 1, 2 or up to 3
          characters. These Combos can then be modified with a Timed Command.
        </p>
      </div>
      <div className={styles.flexWrapper}>
        <Image
          className={styles.cardImages}
          rounded
          src={`${process.env.PUBLIC_URL}/demo1.jpg`}
        />
        <p>
          <b>Timed Commands</b>. If you time your button presses just right when
          attacking an enemy, you’ll do extra damage or even unlock further
          steps of the Combo. Can also be used to defend yourself from incoming
          attacks.
        </p>
      </div>
      <div className={styles.flexWrapper}>
        <Image
          className={styles.cardImages}
          rounded
          src={`${process.env.PUBLIC_URL}/demo3.gif`}
        />
        <p>
          <b> Starter vs Master</b>. Choose between these 2 modes and use the
          one you feel more comfortable with. <b>Starter mode</b> will slow down
          the action before each input and show which button(s) to press.
          <b> Master mode</b> will use fewer resources and hit harder but the
          action will move at normal speed and not show any button indications
          on the screen.
        </p>
      </div>
      <div className={styles.flexWrapper}>
        <Image
          className={styles.cardImages}
          rounded
          src={`${process.env.PUBLIC_URL}/chrono-trigger-tripletech.gif`}
        />
      </div>
    </div>

    <div className={styles.storyBoard}>
      <h2>Storyboard: Tutorial Combo</h2>
      <Image
        src={`${process.env.PUBLIC_URL}/Storyboard_Tutorial_Combo.png`}
        style={{
          maxWidth: 800,
          maxHeight: 1300,
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
                <b>Game Design</b>. Develop the whole concept of the game, which
                includes: the main gameplay loop, mechanics of each move, combo
                mechanics, technical info such as timeframe of the button
                presses in order for the attacks to be successful, damage
                calculations, among other design choices.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p>Game Design notes</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                One of the most satisfying feelings is to receive immediate
                feedback for doing anything. I want to give that feeling to the
                players where they can feel good in each fight because they
                managed to land critical hits and evade all attacks. This can
                only be done not by a random stat but by the skill of the
                player. I want to put players in a Flow state when faced with a
                difficult challenge.
              </p>
              <p>
                Coming from a long history with RPGs and Fighting games, I
                researched a lot of the systems that have been used in those
                genres and came up with this idea.
              </p>
              <p>
                I took the elements of an RPG and stripped it down to its most
                basic form to test if the core gameplay was good. Then I used
                the combo system found on some RPGs and mixed it with the
                feeling of combos in Fighting games.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>

    <div className={styles.references}>
      <h2>References</h2>
      <div className={styles.list}>
        <p>In order of appearance:</p>
        <ul>
          <li>Image by Square-Enix</li>
          <li>Image by Nintendo</li>
          <li>Image by Japan Studio</li>
          <li>Image by Arc System Works</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ProjectDemoRPG;
