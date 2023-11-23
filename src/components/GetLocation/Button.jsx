import PropTypes from 'prop-types';
import useWeatherData from '../../hooks/useWeatherData';

const propTypes = {
    city: PropTypes.string
  };

const Button = () => {
    const { weatherData, fetchWeatherData } = useWeatherData()
    
    function handleSearch(city) {
        fetchWeatherData(city);
    }
     
    return(
        <>
            <button className="btn" onClick={handleSearch}>Get Weather</button>
        </>
    );
};

Button.propTypes = propTypes;

export default Button;