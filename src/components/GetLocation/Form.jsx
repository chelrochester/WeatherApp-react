import { useState } from "react";

function Form() {
    const [city, setCity] = useState("")

    function handleChange() {
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
                    onChange={handleChange}
                    ></input>
                </form>
           
        </>
    )
}

export default Form;