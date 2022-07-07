import { useState } from 'react';
import './general.css';

export default function SelectInput(props) {

    const [option_value, setValue] = useState('');

    const handleSelect = (event) =>
    setValue(event.target.value);

    return (
        <span>
            <label htmlFor="selectInput">{props.label}</label>
            <select
            className={props.className}
            onChange={handleSelect}
            value={option_value}
            >
            <option selected value="none">select option</option>
            {props.options.map(item => {
                return(
                    <option key={item} value={item}>{item}</option>
                )
            })}
            </select>
        </span>
    );
}