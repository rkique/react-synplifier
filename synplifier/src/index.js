import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

let myInput = ''
const searchfield = document.getElementById("searchfield");
searchfield.addEventListener("input", on_keystroke, false);
  function on_keystroke() {
    const myInput = searchfield.value.trim();
    console.log(`myInput at the beginnign is ${myInput}`)
    //1. I want the Table to render on every keypress with mySearch
    //2. I want to bold the text for each match in the Table
    //3. Structure help
    ReactDOM.render(<App mySearch={myInput} />, document.getElementById('root'));
  }

ReactDOM.render(<App mySearch={''}/>, document.getElementById('root'));


