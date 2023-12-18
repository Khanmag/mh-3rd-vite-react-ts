import React from "react";

type ButtonsProps = {
  toggleGreen: () => void;
}
const Buttons = ({toggleGreen}:ButtonsProps) => {
  console.log('render BUTTONS');
  return (
    <>
      <button>change main text color</button>
      <br />
      <button onClick={toggleGreen}>change title color</button>
    </>
  );
};
// export default Buttons
const MemoButtons = React.memo(Buttons)
export default MemoButtons
