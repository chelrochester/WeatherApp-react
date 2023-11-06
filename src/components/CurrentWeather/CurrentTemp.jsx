import PropTypes from 'prop-types';

const propTypes = {
  temp: PropTypes.number
};

const CurrentTemp = (props) => {
    
    return(
        <>
        <h1 className="current-temp">{props.temp}°</h1>
        </>
    );
};

CurrentTemp.propTypes = propTypes;

export default CurrentTemp;