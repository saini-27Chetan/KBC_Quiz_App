import { useEffect, useState, useMemo } from "react";
import "./App.css";
import ModalWindow from "./Components/ModalWindow";
import Timer from "./Components/Timer";
import Quiz from "./Components/Quiz";
import data from "./Components/Data";
import Earned from "./Components/Earned";

function App() {
  const [userName, setUserName] = useState(null);
  const [quesNum, setQuesNum] = useState(15);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹  1,000" },
        { id: 2, amount: "₹  2,000" },
        { id: 3, amount: "₹  3,000" },
        { id: 4, amount: "₹  5,000" },
        { id: 5, amount: "₹  10,000" },
        { id: 6, amount: "₹  20,000" },
        { id: 7, amount: "₹  40,000" },
        { id: 8, amount: "₹  80,000" },
        { id: 9, amount: "₹  1,60,000" },
        { id: 10, amount: "₹  3,20,000" },
        { id: 11, amount: "₹  6,40,000" },
        { id: 12, amount: "₹  12,50,000" },
        { id: 13, amount: "₹  25,00,000" },
        { id: 14, amount: "₹  50,00,000" },
        { id: 15, amount: "₹  1,00,00,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    quesNum > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === quesNum - 1).amount);
  }, [quesNum, moneyPyramid]);

  return (
    <div className="app">
      {!userName ? (
        <ModalWindow setUserName={setUserName} />
      ) : (
        <>
          <div className="main">
            {stop || quesNum === 16 ? (
              <Earned earned={earned} quesNum={quesNum} />
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} quesNum={quesNum} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    quesNum={quesNum}
                    setQuesNum={setQuesNum}
                    setStop={setStop}
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
                    quesNum === m.id ? "moneyListItem active" : "moneyListItem"
                  }
                >
                  <span className="moneyListItemQues">{m.id}</span>
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
