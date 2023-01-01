import { useState } from 'react';
import Cards from './Cards'
import Scoreboard from './Scoreboard';
import Level from './Level';

function Game() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [level, setLevel] = useState(1);
  const [cards, addCard] = useState([]);
  const CARDS_PER_DECK = 7;
  const MAX_LEVEL = 7;

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighscore = () => {
    if(score > highscore) {
      setHighscore(score);
    }
  };

  const handleLevel = () => {
    setLevel((prevLevel) => prevLevel + 1);
  };

  const handleCards = (cardName) => {
    addCard((prevCards) => [...prevCards, cardName]);
  };

  const resetGame = () => {
    setScore(0);
    addCard([]);
    setLevel(1);
  }

  const resetCurrentLevel = () => {
    addCard([]);
  }

  const handleGameLoop = (cardName) => {
    if(!cards.includes(cardName)) {
      handleCards(cardName);
      handleScore();
      if(CARDS_PER_DECK - 1 === cards.length) {
        handleLevel();
        resetCurrentLevel();
        if(MAX_LEVEL === level) {
          console.log("Game end");
          handleHighscore();
          resetGame();
        }
      }
    }
    else {
      handleHighscore();
      resetGame();
    }
  }

  return (
    <div>
      <Scoreboard score={score} highscore={highscore}></Scoreboard>
      <Level level={level}></Level>
      <Cards handleGameLoop={handleGameLoop} level={level} score={score} highscore={highscore}></Cards>
    </div>
  );
}

export default Game;