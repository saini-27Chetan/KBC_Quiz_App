import React from "react";
import "./Earned.css";

export default function Earned(props) {
  const RestartHandler = () => {
    window.location.reload();
  };

  return (
    <div className="lastModal">
      {props.quesNum === 16 ? (
        <div className="winnerText">
          CONGRATULATIONS 🥳🥳
          <br />
          You Earned: {props.earned}
        </div>
      ) : (
        <div className="endText">
          Thanks for Playing!!
          <br />
          You Earned: {props.earned}
        </div>
      )}
      <button className="submitBtn" onClick={RestartHandler}>
        Click here to continue
      </button>
    </div>
  );
}
