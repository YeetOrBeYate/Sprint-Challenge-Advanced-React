import React, {useState} from 'react';
import './App.css';
import {GetData} from "./hooks/GetData";
import Card from "./Components/Card";

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
        {values.map((player,index)=>(
          <Card player={player} key={index}/>
        ))}
        
    </div>
  );
}

export default App;
