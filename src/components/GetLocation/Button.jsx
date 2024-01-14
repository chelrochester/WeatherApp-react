import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func,
};

const Button = ({ onClick }) => {

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
