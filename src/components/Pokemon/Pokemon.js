import React from "react";
import styles from "./Pokemon.module.css";
import PicText from "../PicText/PicText";

const renderTabSystemCombat = () => (
  <>
    <h2>Combat - Tab system style</h2>
    <p>
      This style is based on the Tab system present in most MMOs. A global
      cooldown will rule over the general use of abilities.
    </p>
    <p>
      The moves will be part of a combo or rotation where you start with Scratch
      (a low level attack for example), then move to Cut and end with Slash,
      increasing in overall damage with some moves buffing/debuffing the
      Pokémon. As your Pokémon raises in level, they will learn new moves that
      allow them to continue the combo. They will still only be able to learn 4
      moves but this combo routes will count as 1 move. This paired with Trainer
      abilities will make the combat more engaging.
    </p>
  </>
);

const renderPokenStyleCombat = () => (
  <>
    <h2>Combat - Pokkén style</h2>
    <p>
      One of the most cool and engaging systems to date in a Pokémon spinoff is
      the Pokkén Tournament game. It is a fighting game with a lot of moves and
      combos designed specifically for each Pokémon. Each Pokémon felt unique
      and were divided in categories.
    </p>
    <p>
      For this reason, applying this same level of detail to each Pokémon would
      be too much for an MMO. While more games in the genre are being developed
      as an action based game, they do not have the 900+ Pokémon that would need
      to be animated. A possible solution for this would be that the animations
      are part of the move and not the Pokémon, same as the mainline games. But
      for it to reach a certain level of quality I would suggest to make various
      animations for the Pokémon as well so the player isn't distracted by those
      details.
    </p>
  </>
);
const renderExtraFeatures = () => (
  <>
    <h2>Extra features</h2>
    <ul>
      <li>
        Classes - The Class would be the main leveling system for your Trainer.
        The Trainer will learn many support actions to help your Pokémon in
        battle and also outside of it.
      </li>
      <li>
        TCG - TCG is one of the most successful spin-offs of the Pokémon
        franchise. Having the actual game inside this game could be yet another
        way in which players interact with each other. Seasons, tournaments and
        friendly battles could all help this feature.
      </li>
      <li>Photo Mode aka Pokémon Snap.</li>
      <li>
        Secret bases - Decorate your place and invite other people in. You can
        trade, chat, battle play cards etc
      </li>
    </ul>
    <p>… and many more!</p>
  </>
);

const renderPokemonGameDesign = () => (
  <>
    <h2>Game Design thought process and notes</h2>
    <p>
      The purpose of the game is to explore and bond with your Pokémon. Inspired
      by the early stories of the series creator, Satoshi Tajiri, who had so
      much joy and fun going out to nearby forests to explore and see who could
      find the most insects, this game should bring the same experience and
      feelings to the players.
    </p>
    <p>
      I think everyone that has played Pokémon has at least thought how cool
      this world would be in an Online setting seeing players run all around.
      With that in mind, I created this project to try to capture everything a
      Pokémon MMO would need.
    </p>
    <p>
      The most complicated part was the combat, and I couldn’t even decide how
      to do it, which is why I propose 2 different styles. I’ve played my share
      of MMOs and action/fighting games so either system I think would be great.
    </p>
    <p>
      What got me excited was all the additions the game could have to truly
      make it a living world. The TCG and Photo Mode can be games on their own,
      as they currently are. In typical MMO fashion, each expansion could add an
      entire region with new Pokémon and areas to discover. All the groundwork
      has already been laid out thanks to the mainline game series. On this note
      alone, you have around 8-9 expansions already with original regions and
      never before seen Pokémon as part of this original game.
    </p>
    <p>
      I took inspiration from various Pokémon sources, such as: the main games,
      the TCG, Pokémon Snap, Pokkén Tournament DX, Pokémon Adventures manga,
      among others.
    </p>
    <p>
      I’d like to clarify that this is the least “completed” project due to the
      size of the idea. But I believe that the building blocks are there. For
      more details, information and crazy ideas you can check the GDD I made
      (warning: it is not the most organized document).
    </p>
  </>
);

const Pokemon = () => (
  <div>
    <div className={styles.content}>
      <h1> Project: Pokémon MMO</h1>
      <p>
        Your adventure awaits: Climb mountains, traverse oceans, explore dark
        caves. Travel in a vast and expansive world where you will need to work
        with your Pokémon to overcome the many ordeals you will face.
      </p>
      <p>
        This is a project a little different than the other ones presented in my
        portfolio. Due to the size of an MMO, I will outline some of the main
        attractions and my design thoughts. ​​​​​​​
      </p>
      <PicText imgFileName="pokemon3.png"> {renderTabSystemCombat()}</PicText>
      <PicText picFirst imgFileName="pokemon4.png"> {renderPokenStyleCombat()}</PicText>
      <PicText imgFileName="pokemon2.png"> {renderExtraFeatures()}</PicText>
      <PicText picFirst imgFileName="pokemon5.png"> {renderPokemonGameDesign()}</PicText>
    </div>
  </div>
);

export default Pokemon;
