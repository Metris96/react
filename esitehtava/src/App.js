import React, {useState, useReducer} from 'react';
import Tweet from './tweet';
//import Db from './dbconnection';
const fs = require('fs');



//import Clicker from './clicker';
var count = document.cookie;
if(count == "" || count == 0){
  document.cookie=" =20; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
}


function App(){
 
  

 
  console.log("Keksin arvo on " + count)
  //const [count, setCount] = useState(20); // pelaajan pisteet
  const [click, setClick] = useState(0); // klikkaukset, muista vaihtaa, niin että hakee tiedostosta
  const increment = () => {
  setClick (click + 1)
  console.log("tämä on " + click + " klikkaus")
    count = count - 1;
    console.log(count)
    checkWin(click)
    document.cookie =count;
    count = document.cookie;
  }
  const reStart = () => {
    setClick (click + 1)
    console.log("tämä on " + click + " klikkaus")
      count = 20;
      console.log(count)
      document.cookie =count;
      count = document.cookie;
    }
  
  var muuttuja = 10 - click % 10; // montako klikkausta seuraavaan voittoon
  
  function checkWin(click){
    if(click % 500 == 0  && click != 0){ // jos klikkausluku on jaollinen 500 eli joka 500 klikkaus, niin annetaan voitto
      count = count + 250;
      console.log("saat 250 pistettä")
      muuttuja = 10;
      alert("Voitit 250 pistettä!!!")
    }
    else if(click % 100 == 0 && click != 0){
      count += 40;
      console.log("saat 40 pistettä")
      muuttuja = 10;
      alert("Voitit 40 pistettä!!!")
    }
    else if(click % 10 == 0  && click != 0){
      count += 5;
      console.log("saat 5 pistettä")
      muuttuja = 10;

      alert("Voitit 5 pistettä!!!")
    }

  }
  /*function reStart(){
    count =  20
    console.log(document.cookie)
    setCookie(count);

  }*/
  function setCookie(count){
    document.cookie = count;
    count = document.cookie;
  }
  if(count == 0){
    return(
      <div className="App">
        <p>voi rähmä, hävisit pelin. voit aloittaa udeelleen käynnistämällä sivun</p>
        <button onClick={reStart}>aloita alusta</button>
        <p>Pisteesi nollaantuvat</p>
      </div>
    );
  }
  else if(count > 0){
  return(
    <div className='App'>
      <p>pisteesi ovat: {count}</p>
      <p>seuraavaan voittoon vaadittavat klikkaukset: {muuttuja}</p>
      {/*<p>nappulaa on klikattu yhteensä: {click} kertaa</p>*/}
      <button onClick={increment}>paina voittaaksesi</button>
     
     </div>    
  );
}
}

export default App;