import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.css";
import { useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
const cx = classNames.bind(styles);

const projects = [
  {
    id: "ninja_up",
    name: "Ninja Up!",
    backgroundUrl: "/ninja3.png",
  },
  { name: "J Force", backgroundUrl: "/J_Force_thumbnail.png" },
  {
    id: "language_quest",
    name: "Language Quest: Magnolia and the Lost City",
    backgroundUrl: "/language_quest.png",
  },
  {
    id: "fall_guys",
    name: "Fall Guys: Ultimate Knockout",
    backgroundUrl: "/minigame3.png",
  },
];

const Home = ({ changeNavItemStatus }) => {
  const history = useHistory();
  return (
    <div className={styles.Home}>
      <div className={styles.proyectImages}>
        {projects.map(({ id, name, backgroundUrl }) => (
          <div key={name} className={cx(styles.card)}>
            <div
              className={styles.box}
              onClick={() => {
                history.push(`/${name}`);
                changeNavItemStatus(name);
              }}
            >
              <Image
                id={id}
                src={`${process.env.PUBLIC_URL}/${backgroundUrl}`}
                style={
                  id === "language_quest"
                    ? {
                        objectFit: "contain",
                        backgroundColor: "#021babff",
                      }
                    : {}
                }
              ></Image>
              <span>{name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h3>
          Eduardo Peña Junco - Game Designer & Producer. From concept to
          execution, I pour my heart into every game.
        </h3>
      </div>
    </div>
  );
};

export default Home;
