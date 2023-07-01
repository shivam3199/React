import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectExample() {
  // const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     setData(response.data[1].email);
    //     console.log("API WAS CALLED");
    //   });

    console.log("useEffect was ran");
  }, []);

  return (
    <div>
      Hello World
      {/* <h1>{data}</h1> */}
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectExample;
