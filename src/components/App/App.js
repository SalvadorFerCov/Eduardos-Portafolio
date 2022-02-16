import React from 'react';
import { Route, HashRouter, Switch, Link } from 'react-router-dom';
import Home from '../Home/Home';
import JForce from '../JForce/JForce';
import MiniGameBattleRoyal from '../MiniGameBattleRoyal/MiniGameBattleRoyal';
import NinjaUp from '../NinjaUp/NinjaUp';
import Pokemon from '../Pokemon/Pokemon';
import ProjectDemoRPG from '../ProjectDemoRpg/ProjectDemoRPG';
import styles from './App.module.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 


const App = () => (
  <HashRouter basename="Eduardos-Portafolio">
    <div
      className={styles.wrapper}
      // style={{
      //   backgroundImage: `url(${process.env.PUBLIC_URL + '/fondo3.jpg'})`,
      // }}
    >
      <div className={styles.content}>
        <div className={styles.navBar}>
          <li>
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className={styles.data}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Ninja Up!" exact>
              <NinjaUp />
            </Route>
            <Route path="/J Force" exact>
              <JForce />
            </Route>
            <Route path="/Project: Demo RPG" exact>
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
