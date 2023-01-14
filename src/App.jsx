import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What was Ally McBeal's profession?",
      answers: [
        {
          text: "Doctor",
          correct: false,
        },
        {
          text: "Lawyer",
          correct: true,
        },
        {
          text: "Accountant",
          correct: false,
        },
        {
          text: "Social Worker",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What word can be put in front of the words 'track', 'way' and 'horse' to make three other words?",
      answers: [
        {
          text: "Road",
          correct: false,
        },
        {
          text: "Sound",
          correct: false,
        },
        {
          text: "Cross",
          correct: false,
        },
        {
          text: "Race",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Which of these cartoon characters is a rodent?",
      answers: [
        {
          text: "Tasmanian Devil",
          correct: false,
        },
        {
          text: "Speedy Gonzalez",
          correct: true,
        },
        {
          text: "Wile E. Coyote",
          correct: false,
        },
        {
          text: "Road Runner",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What were the first two initials of the character played by Larry Hagman in 'Dallas'?",
      answers: [
        {
          text: "JR",
          correct: true,
        },
        {
          text: "JG",
          correct: false,
        },
        {
          text: "JD",
          correct: false,
        },
        {
          text: "JC",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "In the Old Testament, who, with God's help, parted the Red Sea?",
      answers: [
        {
          text: "Jonah",
          correct: false,
        },
        {
          text: "Joseph",
          correct: false,
        },
        {
          text: "Noah",
          correct: false,
        },
        {
          text: "Moses",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Which month of the year was named after Julius Caesar?",
      answers: [
        {
          text: "August",
          correct: false,
        },
        {
          text: "July",
          correct: true,
        },
        {
          text: "June",
          correct: false,
        },
        {
          text: "October",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of these celebrities was not a member of the 'Rat Pack'?",
      answers: [
        {
          text: "Frank Sinatra",
          correct: false,
        },
        {
          text: "Joey Bishop",
          correct: false,
        },
        {
          text: "Sammy Davis Jr",
          correct: false,
        },
        {
          text: "Rock Hudson",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Who was the first Australian Prime Minister?",
      answers: [
        {
          text: "Edmund Barton",
          correct: true,
        },
        {
          text: "Henry Parkes",
          correct: false,
        },
        {
          text: "Malcom Fraser",
          correct: false,
        },
        {
          text: "Rupert Murdoch",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What name was given to the style of architectural design popular in the 1890s?",
      answers: [
        {
          text: "Baroque",
          correct: false,
        },
        {
          text: "Cubism",
          correct: false,
        },
        {
          text: "Art Deco",
          correct: false,
        },
        {
          text: "Art Nouveau",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Which of these US presidents appeared on the television series 'Laugh-In?'",
      answers: [
        {
          text: "Jimmy Carter",
          correct: false,
        },
        {
          text: "Lyndon Johnson",
          correct: false,
        },
        {
          text: "Richard Nixon",
          correct: true,
        },
        {
          text: "Gerald Ford",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "The Earth is approximately how many miles away from the Sun?",
      answers: [
        {
          text: "9.3",
          correct: false,
        },
        {
          text: "39",
          correct: false,
        },
        {
          text: "193",
          correct: false,
        },
        {
          text: "93",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Which insect shorted out an early supercomputer and inspired the term 'computer bug'?",
      answers: [
        {
          text: "Moth",
          correct: true,
        },
        {
          text: "Roach",
          correct: false,
        },
        {
          text: "Fly",
          correct: false,
        },
        {
          text: "Japanese Beetle",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
