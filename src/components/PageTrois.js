import React from 'react';
import { useState } from 'react';

const PageTrois = () => {

    var [input, setInput] = useState("inconnu")
    var [value, setValue] = useState("")

    var copie = (event) => {
        input = event.target.value
        setValue(input)
    }       
        
    var go = () => {
        input = value
        setInput(input)
    }

    return (
        <div className="container">
            <h2>Welcome {input}</h2>
            <input onChange={copie} value={value} type="text" /><button onClick={go}>Click</button>
        </div>
    )
}

export default PageTrois;