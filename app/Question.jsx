export default function Question({ data, answer, dispatch, highscore }) {
  const hasAnswer = answer !== null;

  console.log(data);

  return (
    <div className="flex flex-col items-center p-6 gap-6">
      <h3 className="question text-xl">{data.question}</h3>
      {/* <h3 className="question text-xl">{highscore}</h3> */}
      <ul className="flex flex-col gap-3  ">
        {data.options.map((option, index) => {
          return (
            <button
              className={`py-4 px-16 rounded-full text-white ${
                hasAnswer
                  ? index === data.correctOption
                    ? "bg-secondary "
                    : "bg-red-500 text-white"
                  : ""
              }`}
              disabled={hasAnswer}
              key={option}
              onClick={() => dispatch({ type: "newAnswer", payload: index })}
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
}
