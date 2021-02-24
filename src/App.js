import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css';

function App() {
const avengers = ['Captain America','Thor','Iron Man','Loki']
const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
    {name:'Premiere Pro', price:'$299.99'}
]
    return (
        <div className="App">
            <header className="App-header">
                <Counter></Counter>
            {
                avengers.map(heroes=><p>{heroes}</p>)
                
            }
            {
                products.map(pd=><p>{pd.name}</p>)
            }
            {
                products.map(pd=><Product product={pd}></Product>)
            }

                {/* <Product product={products[0]} price={products[0]}></Product>
                <Product product={products[1]} price={products[1]}></Product>
                <Product product={products[2]} price={products[2]}></Product> */}
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
        margin: '10px',
        width:'400px'
    }
    return (
        <div style={personStyle}>
            <h1>{props.name}</h1>
            <h2>{props.job}</h2>
            <h3>{props.fav}</h3>
        </div>
    )
}

function Product(props) {
    const productStyle = {
        border:'1px solid gray',
        borderRadius:'5px',
        backgroundColor:'lightgray',
        height:'200px',
        width:'200px',
        float:'left'
    }
    return (
        <div style={productStyle}>
            <h3>{props.product.name}</h3>
            <h5>{props.product.price}</h5>
            <button>Buy Now</button>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrease = ()=> setCount (count+1);

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onMouseMove={()=>setCount(count-1*59)}>Click to Decrease</button>
            <button onClick={handleIncrease}>Click to Increase</button>
        </div>
    )
}

export default App;