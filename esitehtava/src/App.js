import React, {useState, useReducer} from 'react';
import Tweet from './tweet';
//import Clicker from './clicker';


function App(){
 



  const [count, setCount] = useState(2); // pelaajan pisteet
  const [click, setClick] = useState(0); // klikkaukset, muista vaihtaa, niin että hakee tiedostosta
  const increment = () => {
  setClick (click + 1)
  console.log("tämä on " + click + " klikkaus")
    setCount(count - 1)
    checkWin(click)
  }
  
  var muuttuja = 10 - click % 10; // montako klikkausta seuraavaan voittoon
  
  function checkWin(click){
    if(click % 500 == 0  && click != 0){ // jos klikkausluku on jaollinen 500 eli joka 500 klikkaus, niin annetaan voitto
      setCount(count + 250)
      console.log("saat 250 pistettä")
      muuttuja = 10;
      alert("Voitit 250 pistettä!!!")
    }
    else if(click % 100 == 0 && click != 0){
      setCount(count + 40)
      console.log("saat 40 pistettä")
      muuttuja = 10;
      alert("Voitit 40 pistettä!!!")
    }
    else if(click % 10 == 0  && click != 0){
      setCount(count + 5)
      console.log("saat 5 pistettä")
      muuttuja = 10;

      alert("Voitit 5 pistettä!!!")
    }

  }
  function reStart(){
    setCount(count + 20)
    console.log("HOmo")
  }
  if(count == 0){
    return(
      <div className="App">
        <p>Hävisit pelin aloita alusta painamalla nappia</p>
        <button onClick={reStart}>aloita alusta</button>
        <p>Pisteesi nollaantuvat</p>
      </div>
    );
  }
  else{  
  return (
    <div className='App'>
      <p>pisteesi ovat: {count}</p>
      <p>seuraavaan voittoon vaadittavat klikkaukset: {muuttuja}</p>
      <p>nappulaa on klikattu yhteensä: {click} kertaa</p>
      <button onClick={increment}>paina voittaaksesi</button>
     
     </div>    
  );
}}

export default App;