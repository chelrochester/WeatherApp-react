import PropTypes from 'prop-types';

const propTypes = {
  humidity: PropTypes.number
};

const Humidity = (props) => {
    return(
      <>
        <div className="humidity">
          <h4>humidity</h4>
          <p>{props.humidity}%</p>
        </div>
      </>
    );
};

Humidity.propTypes = propTypes;


export default Humidity;