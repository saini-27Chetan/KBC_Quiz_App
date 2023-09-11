import { useEffect, useState } from "react";

function Timer({ setStop, quesNum }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      return setStop(true);
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setStop]);

  useEffect(() => {
    quesNum <= 5 && setTimer(30);
    quesNum > 5 && quesNum <= 10 && setTimer(45);
    quesNum > 10 && quesNum <= 15 && setTimer(60);
  }, [quesNum]);

  return timer;
}

export default Timer;
