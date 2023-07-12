export default function Finish({ points, highscore, dispatch }) {
  return (
    <div>
      <h3>You score {points}</h3>
      <h4>(highscore is {highscore})</h4>
      <button onClick={() => dispatch({ type: "restart" })}>restart</button>
    </div>
  );
}
