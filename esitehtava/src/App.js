import React, {useState, useReducer} from 'react';
import Tweet from './tweet';


let count = document.cookie;
if(count == "" || count == 0){
  document.cookie=" =20; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
}


function App(){
 
  //const [count, setCount] = useState(20); // pelaajan pisteet
  const [click, setClick] = useState(1); // klikkaukset, muista vaihtaa, niin että hakee tiedostosta
  const increment = () => { // kasvasttaa klikkauksen arvoa ja muuttaa keksiä
  setClick (click + 1)
  
    count = count -1;
    checkWin(click)
    document.cookie =count;
    count = document.cookie;
  }
  const reStart = () => { //käynnistää pelin uudestaan
    setClick (click + 1)
    
      count = 20;
      document.cookie =count;
      count = document.cookie;
    }
  
  var muuttuja = 10 -  click % 10 +1; // montako klikkausta seuraavaan voittoon
  if(muuttuja === 11){
      muuttuja = 1;
  }
  
  function checkWin(click){
    if(click % 500 === 0  && click != 0){ // jos klikkausluku on jaollinen 500 eli joka 500 klikkaus, niin annetaan voitto
      
    count = count + 250;
    document.cookie = count;
      muuttuja = 10;
      alert("Voitit 250 pistettä!!!")
    }
    else if(click % 100 === 0 && click != 0){
      count += 40;
      document.cookie = count;
      muuttuja = 10;
      alert("Voitit 40 pistettä!!!")
    }
    else if(click % 10 === 0  && click != 0){
      muuttuja = 10;
      count += 5;
      document.cookie = count;
      alert("Voitit 5 pistettä!!!")
    }

  }
  
  if(count < 1){
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