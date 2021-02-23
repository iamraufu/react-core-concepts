import React from 'react'
// import logo from './logo.svg';
import './App.css';

function App() {
const avengers = ['Captain America','Thor','Iron Man','Loki']
    return (
        <div className="App">
            <header className="App-header">
                <Person name="Raufu Prezens" job="Programmer"fav={avengers[0]}></Person>
                <Person name="Eftykhar Rahman" job="Coder"></Person>
                <Person name="iamraufu" job="Entrepreneur"></Person>
            </header>
        </div>
    );
}

function Person(props) {
    const personStyle={
        border: '2px solid cyan',
        margin: '10px'
    }
    return (
        <div style={personStyle}>
            <h1>{props.name}</h1>
            <h2>{props.job}</h2>
            <h3>{props.fav}</h3>
        </div>
    )
}


export default App;