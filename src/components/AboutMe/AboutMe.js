import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.Aboutme}>
      <h2>Hi again! Now a little bit about myself…</h2>
      <div className={styles.content}>
        <p>
          I have worked as a Producer in the videogame industry and as a Project
          Manager/Product Engineer in the software industry. I want to create
          experiences that can make people around the world feel something.
        </p>
        <p>…and cut</p>
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
          <li>Co-founded the development company AstraDev.</li>
          <li>
            I have written the videogame column for Loques magazine for 4 years.
          </li>
          <li>
            Created the “Game Design 101” seminar for the digital design
            congress “CETYS: RENDER 2019”.
          </li>
          <li>
            I like to analyze and understand anything that gets me curious.
          </li>
          <li>Currently playing a lot of Final Fantasy XIV.</li>
          <li>I love corgis but don’t have one (yet).</li>
          <li>My favorite anime is Cowboy Bebop.</li>
          <li>My favorite music group is Fleetwood Mac.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
