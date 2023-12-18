import { useState } from "react";
import TextBlock from "./TextBlock";

const TestRerender = () => {
  const [isRed, setIsRed] = useState(false);
  const handleClick = () => {
    setIsRed((prev) => !prev);
  };
  console.log('render WRAPPER');
  return (
    <div>
      <h1 style={isRed ? { color: "red" } : {}} onClick={handleClick}>
        MAIN TEXT
      </h1>
      <TextBlock/>
    </div>
  );
};
export default TestRerender;
