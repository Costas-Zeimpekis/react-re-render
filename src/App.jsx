import React from "react";
import { BrowserRouter,  Routes,
  Route, } from "react-router-dom";
import Component1 from "./components/Component1";


export default function App() {
  const [count, setCounter] = React.useState(0);
  console.log('App re-render')

  const handleClickCounter = () => {
    console.log("App handlerClick re-render");
    setCounter(count + 1);
  };


  return (
    <div style={{padding: 32}}>
      <h1>Re-rendering App Sandbox</h1>
      <p>{count}</p>
      <button onClick={handleClickCounter}>Add</button>
       <BrowserRouter>
       <Routes>
         <Route element={<Component1 />} path="/" />
       </Routes>
       </BrowserRouter>
    </div>
  );
}
