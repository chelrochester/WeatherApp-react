import PropTypes from 'prop-types';

const propTypes = {
    onSubmit: PropTypes.func,
    city: PropTypes.string
};

function Form({ onSubmit, city }) {

    function onSubmitHandler(e) {
        e.preventDefault();
        console.log("Submitting city:", city);
        onSubmit(city);
    }

    console.log("Rendering with city:", city);

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
                    value={city}
                    onChange={(e) => onSubmit(e.target.value)}
                ></input>
            </form>   
        </>
    );
}

Form.propTypes = propTypes;

export default Form;
