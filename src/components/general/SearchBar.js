import { useState } from 'react';
import './general.css';

export default function SearchBar(props) {

    const [input_value, setValue] = useState('');

    const handleInput = (event) => {
        setValue(event.target.value)
    }

    return (
        <span>
            <label htmlFor="SearchBar">{props.label}</label>
            <input
                type={props.type}
                className={props.className}
                value={input_value}
                onChange={(event) => handleInput(event)}
            >
            </input>
            {/* <p>{input_value}</p> */}
            </span>
        );
}
