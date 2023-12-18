import { useState } from "react";
import Buttons from "./Buttons";
import React from "react";
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
      <Buttons toggleGreen={handleClick}/>
    </>
  );
};

// export default TextBlock;
const MemoTextBlock = React.memo(TextBlock);
export default MemoTextBlock;
