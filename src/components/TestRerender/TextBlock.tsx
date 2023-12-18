import {useState } from "react";
import Buttons from "./Buttons";
const TextBlock = () => {
  const [isGreen, setIsGreen] = useState(false);
  const handleClick = () => {
    setIsGreen((prev) => !prev);
  };
  console.log("render TEXT BLOCK");
  return (
    <>
      <h2 style={isGreen ? { color: "green" } : {}} onClick={handleClick}>
        title
      </h2>
      <Buttons />
    </>
  );
};

export default TextBlock;
