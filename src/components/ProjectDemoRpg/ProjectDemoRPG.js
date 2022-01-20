import React from "react";
import styles from "./ProjectDemoRPG.module.css";
import Figure from "../Figure/Figure";

const renderProjectDemoRPGGameDesign = () => (
  <>
    <h2>Game Design thought process and notes</h2>
    <p>
      One of the most satisfying feelings is to receive immediate feedback for
      doing anything. I want to give that feeling to the players where they can
      feel good in each fight because they managed to land critical hits and
      evade all attacks. This can only be done not by a random stat but by the
      skill of the player. I want to put players in a Flow state when faced with
      a difficult challenge.
    </p>
    <p>
      Coming from a long history with RPGs and Fighting games, I researched a
      lot of the systems that have been used in those genres and came up with
      this idea. I took the elements of an RPG and stripped it down to its most
      basic form to test if the core gameplay was good. Then I used the combo
      system found on some RPGs and mixed it with the feeling of combos in
      Fighting games.
    </p>
  </>
);

const renderBoxDescription = () => (
  <div className={styles.boxDescription}>
    <h2>Back of the box description</h2>
    <p>
      In this world, civilisation has the ability to wield different types of
      Magic, namely control the very energy that surrounds them. Our conflict
      will take us to one of the continents of this world and see the events
      that unfold there.
    </p>
    <p>
      You’ll play as the best friend of the heroine who will try to become the
      Queen and lead her small kingdom to prosperity.
    </p>
  </div>
);

const renderGifCaption = () => (
  <>
    <p>
      Beginner vs advanced - Choose between these 2 modes and use the one you
      feel more comfortable with.
    </p>
    <p>
      Beginner will slow down before each input and show which button to press.
    </p>
    <p>
      Advanced will use fewer resources and hit harder but the animation will
      move at normal speed and not show any button indications on the screen.
    </p>
  </>
);

const ProjectDemoRPG = () => (
  <div>
    <div className={styles.content}>
      <h1> Project: Demo RPG</h1>
      <div className={styles.grid}>
        {renderBoxDescription()}
        <Figure
          imgFileName="X-strike.png"
          figCaption="During combat, unleash devastating Combos with 1, 2 or up to 3 characters. These Combos can then be modified with a Timed command."
        />
        <Figure
          imgFileName="demo1.jpg"
          figCaption="Timed commands: If you time your button presses just right when attacking an enemy, you’ll do extra damage or even unlock further steps of the Combo. Can also be used to defend yourself from incoming attacks."
        />
        <Figure imgFileName="demo3.gif" figCaption={renderGifCaption()} />
      </div>
      <div>
        <h1> Roles and responsibilities</h1>
        <p>
          <span className={styles.highlightWord}>Game Design.</span> Develop the
          whole concept of the game, which includes: the main gameplay loop,
          mechanics of each move, combo mechanics, technical info such as
          timeframe of the button presses in order for the attacks to be
          successful, damage calculations, among other design choices.
        </p>
      </div>
      {renderProjectDemoRPGGameDesign()}
    </div>
  </div>
);

export default ProjectDemoRPG;
