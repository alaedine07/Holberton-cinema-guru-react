import React, { useState } from 'react';
import './general.css';

export default function Input(props) {

    // const [input_value, props.setValue] = useState('');

    // const handleInput = (event) => {
    //     props.setValue(event.target.value)
    // }

    return (
        <input
            label={props.label}
            type={props.type}
            className={props.className}
            // value={input_value}
            // onChange={(event) => handleInput(event)}
        >

        </input>
    );
}