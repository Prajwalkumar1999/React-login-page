import React from "react";
import Form from "./Form";


var isLoggedIn=false;
var userIsRegistered=true;

const currentTime=new Date(2019,11,1,9).getHours();
console.log(currentTime);

function strike() {
  document.getElementById("root").style.textDecoration="line-through";
}
function unStrike() {
  document.getElementById("root").style.textDecoration="null";
}

function App() {
  //Declarative 
 var isDone=true;
 const strikeThrough={textDecoration:"line-through"};
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered}/>
    <p style={isDone ? strikeThrough : null}>Buy milk</p>
    <p>Buy Milk</p>
    <button onClick={strike}>Change to strike through</button>
    <button onClick={unStrike}>Change to strike through</button>
    </div>
  );
}

export default App;
