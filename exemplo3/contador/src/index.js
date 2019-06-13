import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function verificarNumero(count){
    if(count==0){
        return 'Contador não iniciado'
    }
    else{
        return 'Contador Iniciado'
    }
}

let count = 0

class Contador extends React.Component{

    addUm = () => {
      count++  
      console.log(count)
      ReactDOM.render(<Contador />, document.getElementById('root'));
    }

    subUm = () =>{
        count--
        console.log(count)
        ReactDOM.render(<Contador />, document.getElementById('root'));
    }

    resetar = () =>{
        count = 0
        console.log(count)
        ReactDOM.render(<Contador />, document.getElementById('root'));
    }
    render(){
        return(
            <div className="contador">
                <h2>Count: {count}</h2>
                <button onClick={this.addUm}>+1</button>
                <button onClick={this.subUm}>-1</button>
                <button onClick={this.resetar}>Reset</button>
                <p>{verificarNumero(count)}</p>
            </div>
        )
    }
}

ReactDOM.render(<Contador />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
