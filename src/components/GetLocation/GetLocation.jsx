import PropTypes from 'prop-types';

import Button from './Button';
import Form from './Form';

const propTypes = {
  city: PropTypes.string
};

const GetLocation = (props) => {
  
  return (
    <>
    <div className="weather-form">
      <Form city={props.city}/>
      <Button />
    </div>
    </>
  );
};

GetLocation.propTypes = propTypes;

export default GetLocation;

