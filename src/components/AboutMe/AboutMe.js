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
          I've worn a few hats in the tech world, from producing video games to
          managing software projects. My passion? Crafting experiences that
          resonate with people worldwide.
        </p>
        <p>
          I co-founded the software development company, AstraDev, and for four
          years, I shared my insights on games in my video game column for
          Loques magazine.
        </p>
        <p>
          I also created and presented the "Game Design 101" seminar at the
          CETYS: RENDER 2019 digital design congress.
        </p>
        <p>
          I was also a co-founder of a team that organized fighting game
          tournaments, helping to establish a higher standard of quality within
          the scene and build a strong community around competitive gaming.
        </p>
        <p>
          So, with that out of the way, I can now tell you things that I have
          done and stuff that I like.
        </p>
        <p>
          When I'm not working, I'm usually playing something that sparks my
          curiosity (currently, that's Final Fantasy XIV).
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
