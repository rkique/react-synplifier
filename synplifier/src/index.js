import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

let mySearch = ''
const searchfield = document.getElementById("searchfield");
searchfield.addEventListener("input", on_keystroke, false);
  function on_keystroke() {
    const myInput = searchfield.value.trim();
    console.log(myInput)
    mySearch = myInput
    //I want VocabTable to render with myInput
    ReactDOM.render(<App mySearch={mySearch} />, document.getElementById('root'));
  }

ReactDOM.render(<App mySearch={mySearch}/>, document.getElementById('root'));


