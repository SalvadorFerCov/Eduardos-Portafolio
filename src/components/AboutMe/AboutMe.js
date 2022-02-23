import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.Aboutme}>
      <div className={styles.title}>
        <h2>Hi again! Now a little bit about myself…</h2>
      </div>
      <div className={styles.content}>
        <p>
          I have worked as a Producer in the videogame industry and as a Project
          Manager/Product Engineer in the software industry. I want to create
          experiences that can make people around the world feel something.
        </p>
        <p>
          <i>…and cut</i>
        </p>
        <p>
          Are we done? I thought it would never end! Let me take a quick break,
          relax my shoulders, stretch my legs, take a deep breath.
        </p>
        <p>Ah, much better, thank you for waiting.</p>
        <p>
          So, with that out of the way, I can now tell you things that I have
          done and stuff that I like.
        </p>
        <ul>
          <li>Co-founded the software development company AstraDev.</li>
          <li>
            I have written the videogame column for{" "}
            <a href="https://issuu.com/loques/docs/loquesdiciembre20">
              Loques magazine
            </a>{" "}
            for 4 years.
          </li>
          <li>
            Created the “Game Design 101” seminar for the digital design
            congress “CETYS: RENDER 2019”.
          </li>
          <li>
            I like to analyze and understand anything that gets me{" "}
            <a href="https://www.youtube.com/watch?v=1RI5scXYhK0&ab_channel=HoldBacktoBlock">
              {" "}
              curious
            </a>
            .
          </li>
          <li>
            Currently playing a lot of{" "}
            <a href="https://na.finalfantasyxiv.com/lodestone/character/25714009/">
              Final Fantasy XIV
            </a>
            .
          </li>
          <li>I love corgis but don’t have one (yet).</li>
          <li>
            My favorite anime is{" "}
            <a href="https://www.youtube.com/watch?v=e3m6TIZxKhA&ab_channel=TheBeautyOf">
              Cowboy Bebop
            </a>
            .
          </li>
          <li>
            My favorite music group is{" "}
            <a href="https://www.youtube.com/watch?v=Y3ywicffOj4&ab_channel=FleetwoodMac">
              Fleetwood Mac
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
