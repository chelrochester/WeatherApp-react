import PropTypes from 'prop-types';

const propTypes = {
  feelsLike: PropTypes.number
};

const defaultProps = {
  feelsLike: 0,
};

const FeelsLike = (props) => {

    return(
      <>
        <div className="feels-like">
          <h4>feels like</h4>
          <p>{props.feelsLike}°</p>
        </div>
      </>
    );
};

FeelsLike.propTypes = propTypes;
FeelsLike.defaultProps = defaultProps;

export default FeelsLike;