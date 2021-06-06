//Import the Rac and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create a react Component
//it's just a function

function getButtonText(first,second){
    return first +' ' + second;
};
const styles ={backgroundColor:'blue',color:'white'};

const App = () => {
    //  we can also declare javascript variable and use it
    const buttonText = 'Click Me!';
    return (
    <div>
        <label className="label" htmlFor ="name">
            Enter Name:
        </label>
        <input id = "name" type="text"/>
        <button style ={styles}>{getButtonText('hello','tawkir')}</button>
    </div>
    );
};

//  Take the react component and show it on the screen

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)