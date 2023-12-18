import { useCallback, useState } from "react";
import Buttons from "./Buttons";
import React from "react";
type TextBlockProps = {
  toggleRed: () => void;
}
const TextBlock = ({toggleRed}:TextBlockProps) => {
  const [isGreen, setIsGreen] = useState(false);
  // const handleClick = () => {
  //   setIsGreen((prev) => !prev);
  // };
  const goodToggleGreen = useCallback(() => {
    setIsGreen((prev) => !prev);
  }, [])
  console.log("render TEXT BLOCK");
  return (
    <>
      <h2 style={isGreen ? { color: "green" } : {}} onClick={goodToggleGreen}>
        title
      </h2>
      <Buttons toggleGreen={goodToggleGreen} toggleRed={toggleRed}/>
    </>
  );
};

// export default TextBlock;
const MemoTextBlock = React.memo(TextBlock);
export default MemoTextBlock;
