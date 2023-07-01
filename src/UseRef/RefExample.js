import React, { useRef } from "react";

function RefExample() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();       //to focus on the input when the button is clicked!!
    inputRef.current.value = "";    //to clear the input field whwn the button is clicked!!
  };
  return (
    <div>
      <h1>SHIVAM</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefExample;
