import React from "react";

function error() {
  throw Error("ooops it is a trap");
}

export function Test() {
  return (
    <div>
      <h1>hello</h1>
      <button onClick={error}>Break the world</button>
    </div>
  );
}
