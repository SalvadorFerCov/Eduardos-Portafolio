import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.css";
import { useHistory } from "react-router-dom";
const cx = classNames.bind(styles);

const projects = [
  { name: "Ninja Up!", backgroundUrl: "/ninja1.png" },
  { name: "J Force", backgroundUrl: "/jforce2.png" },
  { name: "Project: Demo RPG", backgroundUrl: "/chrono_trigger.jpg" },
  {
    name: "Project: Minigame Battle Royale",
    backgroundUrl: "/minigame2.png",
  },
  {
    name: "Project: Pokémon MMO",
    backgroundUrl: "/pokemon1.png",
  },
];

const Home = () => {
  const history = useHistory();
  return (
    <div className={styles.Home}>
      <div className={styles.content}>
        <h1> Eduardo Peña Junco</h1>
        <p>
          Hola! My name is Eduardo Peña and I'm an Industrial Engineer by career
          but a Gamer by heart. I've worked as a Producer in a videogame studio
          and as a Project Manager/Product Engineer in the software industry.
          What is it that I like about videogames that I would want to dedicate
          my life to them? That is a good question and if I had to answer it, I
          would say the emotions videogames can make you, the player, feel. As a
          Game Designer, I want to create experiences that can make a player
          feel something.
        </p>
      </div>
      <div className={styles.proyectImages}>
        {projects.map(({ name, backgroundUrl }) => (
          <div key={name} className={cx(styles.card)}>
            <div
              onClick={() => {
                history.push(`/${name}`);
              }}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundUrl})`,
                width: 400,
                height: 400,
              }}
              className={styles.background}
            ></div>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
