import PropTypes from 'prop-types';

const propTypes = {
  windSpeed: PropTypes.number
};

const WindSpeed = (props) => {
    return(
      <>
        <div className="wind-speed">
          <h4>wind speed</h4>
          <p>{props.windSpeed}mph</p>
        </div>
      </>
    );
};

WindSpeed.propTypes = propTypes;


export default WindSpeed;