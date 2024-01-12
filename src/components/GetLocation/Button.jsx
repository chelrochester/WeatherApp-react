import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func,
};

const Button = ({ onClick }) => {
    // function handleSearch(e) {
    //     e.preventDefault();
    //     console.log('hello');
    //     onSubmit(city);
    // }

    return (
        <>
            <button className="btn" onClick={onClick}>
                Get Weather
            </button>
        </>
    );
};

Button.propTypes = propTypes;

export default Button;