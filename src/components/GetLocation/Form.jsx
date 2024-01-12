import PropTypes from 'prop-types';

const propTypes = {
    handleChange: PropTypes.func,
    city: PropTypes.string,
    cityInput: PropTypes.func
};

function Form({ handleChange, city, cityInput }) {

    // function onSubmitHandler(e) {
    //     e.preventDefault();
    //     console.log("Submitting city:", city);
    //     onSubmit(city);
    // }

    console.log("Rendering with city:", city);

    return (
        <>    
            <form className="form-control" autoComplete="off" onSubmit={handleChange}>
                <label 
                    htmlFor="city" 
                    className="visually-hidden"
                ></label>
                <input
                    id="city"
                    type="text"
                    className="form-input"
                    placeholder="Search"
                    autoComplete="off"
                    value={cityInput}
                    onChange={handleChange}
                ></input>
            </form>   
        </>
    );
}

Form.propTypes = propTypes;

export default Form;
