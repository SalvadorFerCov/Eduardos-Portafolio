import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.css";
import { useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
const cx = classNames.bind(styles);

const projects = [
  { name: "Ninja Up!", backgroundUrl: "/ninja3.png" },
  { name: "J Force", backgroundUrl: "/J_Force_thumbnail.png" },
  {
    name: "Fall Guys: Ultimate Knockout",
    backgroundUrl: "/minigame3.png",
  },
];

const Home = ({ changeNavItemStatus }) => {
  const history = useHistory();
  return (
    <div className={styles.Home}>
      <div className={styles.proyectImages}>
        {projects.map(({ name, backgroundUrl }) => (
          <div key={name} className={cx(styles.card)}>
            <div
              className={styles.box}
              onClick={() => {
                history.push(`/${name}`);
                changeNavItemStatus(name);
              }}
            >
              <Image src={`${process.env.PUBLIC_URL}/${backgroundUrl}`}></Image>
              <span>{name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h3>
          Hola! My name is Eduardo Peña and I am an Industrial Engineer by
          career but a Gamer by heart.
        </h3>
      </div>
    </div>
  );
};

export default Home;
