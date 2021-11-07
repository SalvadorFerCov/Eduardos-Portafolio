import React from "react";
import styles from "./MiniGameBattleRoyal.module.css";

const renderMiniGameBattleRoyalGameDesign = () => (
  <>
    <h2>Game Design thought process and notes</h2>
    <p>
      This is a project proposal that I sent to Fall Guys developers Tonic games
      (back then Mediatonic). I already had the idea of a minigame battle royale
      and I thought I could adapt some of my ideas to their style. I took into
      consideration the way the game feels and the way players acted in the game
      to create fun minigames where these expressions are welcomed.
    </p>
    <p>
      Thanks to the amazing talent of @Manlio, I described how I wanted to
      present my ideas: a new player should understand everything from a single
      screenshot without too much text. After a couple of revisions, he created
      something truly amazing. Be sure to check him out! I've added a
      complementary 2nd screen with more detailed information for the purposes
      of this portfolio.
    </p>
    <p>
      Besides the 3 minigames I designed (2 of those didn't receive the visual
      treatment), I proposed the Variation System. This allowed to design a
      single minigame and modify some of the elements so the experience was
      different. While there is an implementation of sorts of this in the
      current game (minigames can have different obstacles) it feels more random
      than well-thought.
    </p>
    <p>
      What I was suggesting was a clear distinction between variations that
      would notify the player that the minigame was going to be a certain
      variation, going from normal to hard to hardest. This can create great
      moments of excitement after beating one of these levels and the rewards
      should also match the difficulty.
    </p>
    <p>
      Not only does this affects the perception of players on the amount of
      minigames there are but it is easier on the production side too. Designing
      one minigame and some variations of it is faster on game design, UX/UI,
      development, QA, etc than designing 2-3 different minigames.
    </p>
  </>
);

const renderPic = (path) => (
  <div
    style={{
      backgroundImage: path,
      width: 1200,
      height: 800,
      margin: " 15px",
    }}
    className={styles.background}
  />
);

const MiniGameBattleRoyal = () => (
  <div>
    <div className={styles.content}>
      <h1> Project: Minigame Battle Royale </h1>
      <p>
        An arena/TV show themed tournament on a dystopian future where
        participants are comically injured, which is amusing and televised. It
        consists of various quick challenges spaced in rounds where the lower
        scores are eliminated until only 1 player is standing.
      </p>
      <p>You’ll play as one of the challengers of this show.</p>
      {renderPic(`url(${process.env.PUBLIC_URL}/minigamebattleroyale1.png`)}
      {renderPic(`url(${process.env.PUBLIC_URL}/minigamebattleroyale3.png`)}
      {renderMiniGameBattleRoyalGameDesign()}
    </div>
  </div>
);

export default MiniGameBattleRoyal;
