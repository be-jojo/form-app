import { useState } from "react";
import './FormInput.css'

function FormInput (props){
    const [focus, setFocus] = useState(false)
    const {label, error, onChange, id, ...inputProps} = props;

    function handleFocus(e){
        setFocus(true);
    }
    return (
        <div className="formInput">
            <label>{label}: </label>
            <input 
                {...inputProps} 
                onChange={onChange} 
                onBlur={handleFocus}
                focused={focus.toString()}
            /><br/>
            <span>{error}</span><hr/>
        </div>
    );
}

export default FormInput;