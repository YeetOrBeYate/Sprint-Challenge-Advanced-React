import React, {useState} from 'react';
import './App.css';
import {GetData} from "./hooks/GetData";

function App() {

  const [values] = GetData('http://localhost:5000/api/players')

  if(values.length ===0){
    return(
      <div>
        loading...
      </div>
    );
  }

  return (
    <div className="App">
        Yeet
        <h1>{values.length}</h1>
        
    </div>
  );
}

export default App;
