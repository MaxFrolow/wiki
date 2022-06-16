import * as React from "react";
import Todo from "./components/Todo"
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">



      <h1>My Todods</h1>
      <Todo title='Learn something'/>
      <Todo title='Buy something'/>
      <Todo title='Clean up'/>
      
    </div>
  );
};



export default App