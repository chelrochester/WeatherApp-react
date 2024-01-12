import PropTypes from 'prop-types';

const propTypes = {
    handleChange: PropTypes.func,
    city: PropTypes.string,
    cityInput: PropTypes.func,
    onSubmit: PropTypes.func,
};

function Form({ handleChange, cityInput, onSubmit }) {

    // function onSubmitHandler(e) {
    //     e.preventDefault();
    //     console.log("Submitting city:", city);
    //     onSubmit(city);
    // }

    console.log("Rendering with city:", cityInput);

    return (
        <>    
            <form className="form-control" autoComplete="off" onSubmit={onSubmit}>
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
