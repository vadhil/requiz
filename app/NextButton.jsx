export default function NextButton({ answer, dispatch, index, dataLength }) {
  if (answer === null) return null;
  if (index >= dataLength) {
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
