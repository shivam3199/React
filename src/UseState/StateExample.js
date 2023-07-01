import React, { useState } from "react";

const StateExample = () => {
  const [inputValue, setInputValue] = useState("Testing UseState Hook");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateExample;
