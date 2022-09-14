import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge]=useState(0)
  const [uheartlimit, setUheartlimit]=useState(0)
  const [lheartlimit, setLheartlimit]=useState(0)
  const calculate =() =>{
    {
    const Upper= (220-age)*0.85
    setUheartlimit(Upper)
  } 
  {
    const Lower= (220-age)*0.65
    setLheartlimit(Lower)
  } 

}
return (
  <div id='container'>
    <h3>Heart limit calculator</h3>
    <form >
      <div>
        <label>Age</label>
        <input type="number" value={age} onChange ={e=> setAge(e.target.value)} />
      </div>
      <div>
        <label>heartlimit</label>
        <output id='output'>{lheartlimit}-{uheartlimit}</output>
      </div>
      <button type='button' onClick={calculate}>Calculate</button>
    </form>
  </div>

);
}
export default App;
