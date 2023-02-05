import { useState } from "react";
import './formInput.css'

function FormInput (props){
    const [focus, setFocus] = useState(false)
    const {label, error, onChange, id, ...inputProps} = props;

    function handleFocus(e){
        setFocus(true);
    }
    return (
        <div className="formInput">
            <label>{label}: </label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focus.toString()} />
            <span>{error}</span>
        </div>
    );
}

export default FormInput;