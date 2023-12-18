import { useCallback, useState } from "react";
import TextBlock from "./TextBlock";

const TestRerender = () => {
  const [isRed, setIsRed] = useState(false);
  const handleClick = () => {
    setIsRed((prev) => !prev);
  };
  const goodToggleRed = useCallback(handleClick, [])
  console.log('render WRAPPER');
  return (
    <div>
      <h1 style={isRed ? { color: "red" } : {}} onClick={goodToggleRed}>
        MAIN TEXT
      </h1>
      <TextBlock toggleRed={goodToggleRed}/>
    </div>
  );
};
export default TestRerender;
