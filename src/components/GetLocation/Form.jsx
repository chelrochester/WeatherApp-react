import { useState } from "react";
import PropTypes from 'prop-types';

const propTypes = {
    onSubmit: PropTypes.string,
    city: PropTypes.string
  };

function Form(props) {
    const [city, setCity] = useState("");

    function onSubmitHandler(e) {
        setCity(city);
        e.preventDefault();
    }
    

    return (
        <>    
            <form className="form-control" onSubmit={onSubmitHandler}>
                <label 
                    htmlFor="city" 
                    className="visually-hidden"
                ></label>
                <input
                    id="city"
                    type="text"
                    className="form-input"
                    value={props.city}
                    onChange={(e) => setCity(e.target.value)}
                ></input>
            </form>   
        </>
    );
}

Form.propTypes = propTypes;

export default Form;