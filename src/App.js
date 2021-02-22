import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
    var person = {
        name: "Raufu Prezens",
        job: "Programmer"
    }
    var person2 = {
        name: "Eftykhar Rahman",
        job: "Software Engineer"
    }
    var style = {
        color: 'lightblue',
        backgroundColor: "yellow"
    }
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit Done < code > src / App.js < /code> and save to reload. < /
        p >
        <
        h1 className = ""
        style = { style } > { person.name + " " + person.job } < /h1> <
        h2 style = {
            {
                color: 'cyan',
                backgroundColor: "tomato"
            }
        } > { person2.name + " " + person2.job } < /h2> <
        p > My First React App < /p> < /
        header > <
        /div>
    );
}

export default App;