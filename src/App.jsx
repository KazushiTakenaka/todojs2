import React, { useState} from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num,setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
    
  const onClickCoutUp = () => {
      setNum(num + 10);
  };
  const onClickSwitchShowFlag = () => {
      setFaceShowFlag(!faceShowFlag);
  }
  
  return (
    <>
      <h1 style={{ color: "greenyellow" }}>こんにちは</h1>
      <ColorfulMessage color="blue" fontSize="25px">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink" fontSize="30px">元気です！</ColorfulMessage>
      <button onClick={onClickCoutUp}>カウントアップ</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
      
    </>
  );
};

export default App;
