import PropTypes from 'prop-types';
import Button from './Button';
import Form from './Form';


const propTypes = {
    handleChange: PropTypes.func,
    onClick: PropTypes.func,
    city: PropTypes.string,
    cityInput: PropTypes.func
};

const GetLocation = ({ handleChange, onClick, city, cityInput }) => {

    
    return (
        <>
            <div className="weather-form">
                <Form handleChange={handleChange} city={city} cityInput={cityInput} />
                <Button onClick={onClick} city={city} />
            </div>
        </>
    );
};

GetLocation.propTypes = propTypes;

export default GetLocation;
