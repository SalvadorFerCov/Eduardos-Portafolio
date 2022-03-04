import React from "react";
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

const App = () => (
  <HashRouter basename="Eduardos-Portafolio">
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.navBar}>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#">Eduardo's Portfolio</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#Ninja Up!">Ninja Up!</Nav.Link>
                  <Nav.Link href="#J Force">J Force</Nav.Link>
                  <Nav.Link href="#Fall Guys: Ultimate Knockout">
                    Fall Guys: Ultimate Knockout
                  </Nav.Link>
                  <Nav.Link href="#About me">About me</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className={styles.data}>
          <Switch>
            <Route path="/" exact>
              <Home />
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

export default App;
