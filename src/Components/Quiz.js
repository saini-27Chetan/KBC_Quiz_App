import { useEffect, useState } from "react";
import "./Quiz.css";

function Quiz({ data, quesNum, setQuesNum, setStop}) {
  const [ques, setQues] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQues(data[quesNum - 1]);
  }, [data, quesNum]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = (a) => {
    setSelectedAns(a);
    setClassName("answer active");
    delay(1000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(5000, () => {
      if (a.correct) {
        delay(1000,() => {
            setQuesNum((prev) => (prev + 1));
            setSelectedAns(null);
        });
      } 
      else {
        delay(1000, ()=>{
            setStop(true);
        })
      }
    })
  };

  return (
    <div className="quiz">
      <div className="question">{ques?.question}</div>
      <div className="answers">
        {ques?.answers.map((a) => (
          <div
            className={selectedAns === a ? className : "answer"}
            onClick={() => !selectedAns && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
