import PropTypes from 'prop-types';
import Button from './Button';
import Form from './Form';

const propTypes = {
    onUpdateCity: PropTypes.func,
    city: PropTypes.string
};

const GetLocation = ({ onUpdateCity, city }) => {
    return (
        <>
            <div className="weather-form">
                <Form onSubmit={onUpdateCity} city={city} />
                <Button onSubmit={onUpdateCity} city={city} />
            </div>
        </>
    );
};

GetLocation.propTypes = propTypes;

export default GetLocation;
