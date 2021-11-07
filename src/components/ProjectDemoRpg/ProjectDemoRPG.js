import React from "react";
import styles from "./ProjectDemoRPG.module.css";
import PicText from "../PicText/PicText";

const renderProjectDemoRPGGamePlay = () => (
  <>
    <h2>Gameplay</h2>
    <ul>
      <li>
        Explore and battle your way through enemies in this RPG inspired by the
        classics.
      </li>
      <li>
        Timed commands: If you time your button presses just right when
        attacking an enemy, you’ll do extra damage or even unlock further steps
        of the Combo. 
      </li>
      <li>
        During combat, unleash devastating Combos with 1, 2 or up to 3
        characters. These Combos can then be modified with a Timed command.
      </li>
      <li>
        Beginner vs advanced - Choose between these 2 modes and use the one you
        feel more comfortable with. Beginner will slow down before each input
        and show which button to press. Advanced will use less resources and hit
        harder but the animation will move at normal speed and not show any
        button indications on screen. 
      </li>
      <li>
        Defense: Use Timed commands to avoid, block or counterattack incoming
        enemy attacks. Which action you will do depends on your timing and the
        attack of the enemy.
      </li>
    </ul>
  </>
);

const renderProjectDemoRPGGameDesign = () => (
  <>
    <h2>Game Design thought process and notes</h2>
    <p>
      One of the most satisfying feelings is to receive immediate feedback for
      doing anything. I want to give that feeling to the players were they can
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
    <p>
      On the balancing side, I created a table and a calculator to see how all
      the attacks with their various modes would play out. The system of stats
      has to be solid for scalability purposes.
    </p>
  </>
);

const ProjectDemoRPG = () => (
  <div>
    <div className={styles.content}>
      <h1> Project: Demo RPG</h1>
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
      <PicText imgFileName="demo1.jpg" imgFileName2="X-strike.png">
        {renderProjectDemoRPGGamePlay()}
      </PicText>
      <div>
        <h1> Roles and responsibilities</h1>
        <p>
          Game Design: Develop the whole concept of the game, the mechanics of
          each move and combo which include the timing of the button presses in
          order for the attacks to be successful, the damage and the attacks of
          enemies.​​​​​​​
        </p>
      </div>
      <PicText imgFileName="demo3.gif" picFirst>
        {renderProjectDemoRPGGameDesign()}
      </PicText>
    </div>
  </div>
);

export default ProjectDemoRPG;
