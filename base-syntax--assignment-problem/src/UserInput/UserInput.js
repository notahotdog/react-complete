import React from 'react';
import './UserInput.css';

const userInput = (props) =>{
    return(
        <div className = "UserInput">
            <input type='text' onChange ={
                props.changed}  value ={props.username}
             />
            <h1> place your input here</h1>
        </div>
    )
}
export default userInput;