"use client";
import Image from "next/image";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import Finish from "./Finish";

const initialState = {
  data: [],
  index: 0,
  answer: null,
  points: 0,
  test: 0,
  highscore: 0,
  status: "ready",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,

        data: action.payload,
        status: "dataReceived",
      }; //action.payload hanya utk mengambil data, dg payload: data
    case "active":
      return {
        ...state,
        index: 1,
        status: "active",
      };
    case "newAnswer":
      const d = state.data.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === d.correctOption ? state.points + 10 : state.points,
      };
    case "nextQuestion":
      return { ...state, answer: null, index: state.index + 1 };
    case "finish":
      return {
        ...state,
        status: "finish",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...state,
        answer: null,
        points: 0,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
        status: "dataReceived",
      };
    default:
      return "action unknown";
  }
}

export default function Play() {
  const [{ data, status, index, points, answer, highscore }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8000/questions");
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data });
    }
    getData();
  }, []);
  return (
    <div>
      <div className="bg text-white p-16  bg-primary">
        <h1 className="font-black text-3xl text-secondary text-center p-3">
          ReQuizz
        </h1>
        {status === "dataReceived" && <StartScreen dispatch={dispatch} />}
        {status === "active" && (
          <div className=" flex flex-col">
            <ProgressBar index={index} data={data} />
            <Question
              dispatch={dispatch}
              data={data[index]}
              index={index}
              answer={answer}
              highscore={highscore}
            />
            <div className="ms-auto">
              <NextButton
                dispatch={dispatch}
                index={index}
                answer={answer}
                dataLength={data.length}
              />
            </div>
          </div>
        )}
        {status === "finish" && (
          <Finish highscore={highscore} points={points} dispatch={dispatch} />
        )}
      </div>
    </div>
  );
}
