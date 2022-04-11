import React, { Profiler } from "react";

function Text1({ text }) {
  console.log("Component-1 text re-render");
 

  return  (<Profiler id="Text1" onRender={(...args) => {
    const {'1': phase, '2': actualDuration} = args
    console.log('Phase',phase)
    console.log('Actual duration',actualDuration)
  }}>
    <div>Text-1: {text}</div>
  </Profiler>);
}

export default Text1;
