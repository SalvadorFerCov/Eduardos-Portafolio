import React from "react";
import styles from "./Pokemon.module.css";
import Figure from "../Figure/Figure";

const renderBoxDescription = () => (
  <div className={styles.boxDescription}>
    <h2>Back of the box description</h2>
    <p>
      Your adventure awaits: Climb mountains, traverse oceans, explore dark
      caves. Travel in a vast and expansive world where you will need to work
      with your Pokémon to overcome the many ordeals you will face.
    </p>
  </div>
);

const renderRoles = () => (
  <div>
    <h2>Roles and responsibilities</h2>
    <p>
      <span className={styles.highlightWord}>Game Design.</span> Define the
      basic concept of the game and extra features that will make the world feel
      complete. This includes the 2 different types of combat, Photo mode, the
      implementation of the TCG, and other technical data such as the possible
      classes a Player could choose and how that could impact the overall
      experience.
    </p>
  </div>
);

const renderGameDesign = () => (
  <div>
    <h2>Game Design thought process and notes</h2>
    <p>
      The purpose of the game is to explore and bond with your Pokémon. Inspired
      by the early stories of the series creator, Satoshi Tajiri, who had so
      much joy and fun going out to nearby forests to explore and see who could
      find the most insects, this game should bring the same experience and
      feelings to the players. I took inspiration from various Pokémon sources,
      such as the main games, the TCG, Pokémon Snap, Pokkén Tournament DX,
      Pokémon Adventures manga, among others.
    </p>
    <p>
      I think everyone that has played Pokémon has at least thought how cool
      this world would be in an Online setting; seeing players run all around.
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
  </div>
);

const Pokemon = () => (
  <div>
    <div className={styles.content}>
      <h1> Project: Pokémon MMO</h1>
      <p>
        DISCLAIMER: This is a project a little different than the other ones
        presented in my portfolio. Due to the size of the project and idea, I
        will only outline some of the main attractions and my design thoughts.
      </p>
      {renderBoxDescription()}

      <div className={styles.grid}>
        <Figure
          imgFileName="Pokemon_battle1.jpg"
          figCaption="Traditional combat style, with roots both in Pokémon and most MMOs."
        />
        <div className={styles.paragrapWrapper}>
          <p>
            <span className={styles.highlightWord}>
              Tab system combat style.
            </span>{" "}
            This style is based on the Tab system present in most MMOs. A global
            cooldown will rule over the general use of abilities.
          </p>
          <p>
            The moves will be part of a combo or rotation where you start with a
            low-level attack then chain increasingly damage moves. As your
            Pokémon raises in level, they will learn new moves that allow them
            to continue the combo. This paired with Trainer abilities will make
            the combat more engaging.
          </p>
        </div>
        <div className={styles.paragrapWrapper}>
          <p>
            <span className={styles.highlightWord}>Pokkén style combat.</span>{" "}
            One of the coolest and engaging systems to date in a Pokémon spinoff
            is the Pokkén Tournament game. It is a fighting game with a lot of
            moves and combos designed specifically for each Pokémon. Each
            Pokémon felt unique and were divided into categories.
          </p>
          <p>
            For this reason, applying this same level of detail to each Pokémon
            would be too much for an MMO. While more games in the genre are
            being developed as action-based games, they do not have the 900+
            Pokémon that would need to be animated. A possible solution for this
            would be that the animations are part of the move and not the
            Pokémon, the same as the mainline games.
          </p>
        </div>
        <Figure
          imgFileName="pokken_battle_system1.jpg"
          figCaption="Action-oriented gameplay focused on the uniqueness of each Pokemon."
        />
      </div>
      <h2>Extra features</h2>
      <div className={styles.grid}>
        <Figure
          imgFileName="pokemon_secret_bases.jpg"
          figCaption="Housing - Decorate your place and invite other people in. You can trade, chat, battle, play cards, etc."
        />
        <Figure
          imgFileName="pokemon_adventures_3.jpg"
          figCaption="Classes - The main leveling system for your Trainer. The Trainer will learn many support actions to help your Pokémon in battle and also outside of it."
        />
        <Figure
          imgFileName="new_pokemon_snap_1.jpg"
          figCaption=" Photo Mode - In-depth photo capabilities akin to Pokemon Snap."
        />
        <Figure
          imgFileName="pokemon_tcg_online.png"
          figCaption="Trading Card Game - Seasons, tournaments, and unranked battles. Cards you buy in the real world can be redeemed here also."
        />
      </div>
      {renderRoles()}
      {renderGameDesign()}
    </div>
  </div>
);

export default Pokemon;
