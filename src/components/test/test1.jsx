import React from "react";

function error1() {
  throw Error("ooops it is a trap11111");
}

export function Test1() {
  return (
    <div>
      <h1>push test1</h1>
      <button onClick={error1}>test1</button>
    </div>
  );
}
