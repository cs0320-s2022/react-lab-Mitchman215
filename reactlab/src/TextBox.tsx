import React from 'react';
import { isPropertySignature } from 'typescript';
import './App.css';

// type also works here
interface textBoxProp {
    label : string,
    change : (text : string) => void
}

function TextBox(props : textBoxProp) {
    return (
        <div>
            <p> {props.label} </p>
            <input type="text" onChange={(e) => props.change(e.target.value)}/>
        </div>
    );
  }

export default TextBox;
