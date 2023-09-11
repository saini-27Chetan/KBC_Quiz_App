import "./ModalWindow.css";
import { useRef } from "react";

function ModalWindow({ setUserName }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value
      ? setUserName(inputRef.current.value)
      : alert("YOU HAVEN'T ENTERED THE NAME. SO PLEASE ENTER IT!!");
  };
  return (
    <div className="container">
      <div className="header">Welcome to Kaun Banega Crorepatti</div>
      <div className="inputBox">
        <input
          placeholder="Enter our Name"
          className="inputName"
          ref={inputRef}
        />
        <button className="startBtn" onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
