import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [intervalID, setIntervalID] = useState(-1);

  //add function
  function plus() {
    setCounter(function (prev) {
      return prev + 1;
    });
  }

  //minus function
  function minus() {
    setCounter(function (prev) {
      return prev - 1;
    });
  }

  //keep adding
  const startInterval = () => {
    setIntervalID(
      setInterval(() => {
        setCounter((prev) => (prev + 1) % 10);
      }, 1000)
    );
  };

  //stop adding
  const stopInterval = () => {
    clearInterval(intervalID);
    setIntervalID(-1);
    setCounter(0);
  };

  useEffect(
    () => () => {
      clearTimeout(intervalID);
    },
    []
  );

  return (
    <div>
      number:{counter}
      <br />
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      <button onClick={startInterval}>Start Adding</button>
      <button onClick={stopInterval}>Clear</button>
    </div>
  );
};

export default Home;
