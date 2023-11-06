import PropTypes from 'prop-types';

const propTypes = {
  description: PropTypes.string
};

const WeatherDesc = (props) => {
    return(
        <>
        <h3 className="weather-desc">{props.description}</h3>
        </>
    );
};

WeatherDesc.propTypes = propTypes;

export default WeatherDesc;