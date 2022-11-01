import { useEffect } from "react";
import { useState } from "react";

function Demo() {
  //Lifecycle hook
  console.log("Hello");

  //Mount

  useEffect(() => {
    console.log("hello");
    fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/users").then(() => {
      console.log("Fetch");
    });
  }, []);

  useEffect(() => {
    return () => {
      console.log("destroy");
    };
  }, []);

  const [timer, setTimer] = useState(0);
  useEffect(() => {
    console.log("timer update");
  }, [timer]);
  return (
    <div>
      <button onClick={() => setTimer(timer + 1)}>+</button>
      {timer}
      <button onClick={() => setTimer(timer - 1)}>-</button>
    </div>
  );
}

export default Demo;
