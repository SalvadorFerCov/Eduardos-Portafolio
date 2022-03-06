import React, { useState } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import JForce from "../JForce/JForce";
import MiniGameBattleRoyal from "../MiniGameBattleRoyal/MiniGameBattleRoyal";
import NinjaUp from "../NinjaUp/NinjaUp";
import Pokemon from "../Pokemon/Pokemon";
import ProjectDemoRPG from "../ProjectDemoRpg/ProjectDemoRPG";
import styles from "./App.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const navItemsStatus = [
  { name: "Ninja Up!", active: false },
  { name: "J Force", active: false },
  { name: "Fall Guys: Ultimate Knockout", active: false },
  { name: "About me", active: false },
];

const getLocalStorage = (name) =>
  localStorage.getItem(name) === "true" ? true : false;

const setLocalStorage = (name, active) => localStorage.setItem(name, active);

const App = () => {
  const [navItems, setNavItems] = useState(
    navItemsStatus.map((item) => ({
      ...item,
      active: getLocalStorage(item.name),
    }))
  );

  const getNavItemStatusByName = (name) =>
    navItems.filter((item) => item.name === name)[0]?.active ?? false;

  const changeNavItemStatus = (name) =>
    setNavItems(
      navItemsStatus.map((item) => {
        if (item.name === name) {
          setLocalStorage(item.name, !item.active);
          return { ...item, active: !item.active };
        } else {
          setLocalStorage(item.name, item.active);
          return item;
        }
      })
    );

  const changeAllNavItemStatus = () =>
    setNavItems(
      navItemsStatus.map((item) => {
        setLocalStorage(item.name, false);
        return { ...item, active: false };
      })
    );

  return (
    <HashRouter basename="Eduardos-Portafolio">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.navBar}>
            <Container>
              <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                  <Navbar.Brand
                    onClick={() => changeAllNavItemStatus()}
                    href="#"
                  >
                    Eduardo's Portfolio
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link
                        href="#Ninja Up!"
                        active={getNavItemStatusByName("Ninja Up!")}
                        onClick={() => changeNavItemStatus("Ninja Up!")}
                      >
                        Ninja Up!
                      </Nav.Link>
                      <Nav.Link
                        id="test"
                        href="#J Force"
                        active={getNavItemStatusByName("J Force")}
                        onClick={() => changeNavItemStatus("J Force")}
                      >
                        J Force
                      </Nav.Link>
                      <Nav.Link
                        href="#Fall Guys: Ultimate Knockout"
                        active={getNavItemStatusByName(
                          "Fall Guys: Ultimate Knockout"
                        )}
                        onClick={() =>
                          changeNavItemStatus("Fall Guys: Ultimate Knockout")
                        }
                      >
                        Fall Guys: Ultimate Knockout
                      </Nav.Link>
                      <Nav.Link
                        href="#About me"
                        active={getNavItemStatusByName("About me")}
                        onClick={() => changeNavItemStatus("About me")}
                      >
                        About me
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Container>
          </div>
          <div className={styles.data}>
            <Switch>
              <Route path="/" exact>
                <Home changeNavItemStatus={changeNavItemStatus} />
              </Route>
              <Route path="/About me" exact>
                <AboutMe />
              </Route>
              <Route path="/Ninja Up!" exact>
                <NinjaUp />
              </Route>
              <Route path="/J Force" exact>
                <JForce />
              </Route>
              <Route path="/Project: Sky Castle" exact>
                <ProjectDemoRPG />
              </Route>
              <Route path="/Fall Guys: Ultimate Knockout" exact>
                <MiniGameBattleRoyal />
              </Route>
              <Route path="/Project: Pokémon MMO" exact>
                <Pokemon />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
