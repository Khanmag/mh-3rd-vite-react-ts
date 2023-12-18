import React from "react";

type ButtonsProps = {
  toggleGreen: () => void;
  toggleRed: () => void;
}
const Buttons = ({toggleGreen, toggleRed}:ButtonsProps) => {
  console.log('render BUTTONS');
  return (
    <>
      <button onClick={toggleRed}>change main text color</button>
      <br />
      <button onClick={toggleGreen}>change title color</button>
    </>
  );
};
// export default Buttons
const MemoButtons = React.memo(Buttons)
export default MemoButtons
