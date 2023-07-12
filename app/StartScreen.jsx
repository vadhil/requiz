import React from "react";

export default function StartScreen({ dispatch }) {
  return (
    <div className="main p-9 flex flex-col gap-5 justify-center items-center">
      <h3 className="text-xl">check your react knowledge here</h3>
      <button onClick={() => dispatch({ type: "active" })} className="btn">
        start
      </button>
    </div>
  );
}
