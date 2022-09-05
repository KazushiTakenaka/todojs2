import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  const onClickButton = () => alert("ボタン押したよ");
  return (
    <>
      <h1 style={{ color: "greenyellow" }}>こんにちは</h1>
      <ColorfulMessage color="blue" fontSize="25px">
        お元気ですか？
      </ColorfulMessage>
      <ColorfulMessage color="pink" fontSize="30px">
        元気です！
      </ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
