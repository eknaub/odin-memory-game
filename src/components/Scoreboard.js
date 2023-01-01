function Scoreboard(props) {
  const {score, highscore} = props;

  return (
    <div>
      <div>Current Score: {score}</div>
      <div>Highscore: {highscore}</div>
    </div>
  );
}

export default Scoreboard;