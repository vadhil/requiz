export default function NextButton({ answer, dispatch, index, dataLength }) {
  if (answer === null) return null;
  if (index >= 2) {
    return (
      <button className="btn" onClick={() => dispatch({ type: "finish" })}>
        finish
      </button>
    );
  }
  return (
    <button className="btn" onClick={() => dispatch({ type: "nextQuestion" })}>
      Next
    </button>
  );
}
