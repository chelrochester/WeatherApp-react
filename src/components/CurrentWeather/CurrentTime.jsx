import PropTypes from 'prop-types';

const propTypes = {
  time: PropTypes.number
};

const CurrentTime = (props) => {
    return(
        <>
        <p className="current-time">{props.time}p</p>
        </>
    );
};

CurrentTime.propTypes = propTypes;

export default CurrentTime;