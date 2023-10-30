import { useState, useEffect } from "react";

function Form() {
    const [formData, setFormData] = useState(null)

    function handleChange(e) {
        console.log(e.target.value)
    }

    return (
        <>
            
                <form className="form-control">
                    <label htmlFor="city" className="visually-hidden">
                    </label>
                    <input
                    id="city"
                    type="text"
                    className="form-input"
                    onChange={(e) => setCity(e.target.value)}
                    ></input>
                </form>
           
        </>
    )
}

export default Form;