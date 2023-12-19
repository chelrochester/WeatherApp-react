import PropTypes from 'prop-types';

const propTypes = {
    onSubmit: PropTypes.func,
    city: PropTypes.string,
};

const Button = ({ onSubmit, city }) => {
    function handleSearch(e) {
        e.preventDefault();
        console.log('hello');
        onSubmit(city);
    }

    return (
        <>
            <button className="btn" onClick={handleSearch}>
                Get Weather
            </button>
        </>
    );
};

Button.propTypes = propTypes;

export default Button;