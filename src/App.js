import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [advice, setAdvice] = useState("");

  const receivedAdvice = async () => {
  const response = await fetch ("https://www.boredapi.com/api/activity/");
  const data = await response.json();
  setAdvice(data.activity);
     };


  useEffect(() => {
    receivedAdvice();
  }, []);



  return (

    <div className="container">

    <p> {advice} </p>
    <button onClick={receivedAdvice}>Get an advice!</button>

    </div>
  );
}



export default App;
