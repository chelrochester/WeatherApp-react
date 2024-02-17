# Weather web app

## Landing Page

![image](https://github.com/chelrochester/WeatherApp-react/assets/50529205/611df7c9-961b-44db-9c87-d376c30aca72)

## What I've learned

- useState
- props
- custom hooks
- axios

### useState
    const [city, setCity] = useState('');
    const [cityInput, setCityInput] = useState();
    const [submitted, setSubmitted] = useState();

     function handleCityUpdate(e) {
      e.preventDefault();
      setSubmitted(false);
      setCityInput(e.target.value);
      console.log('handleCity');
  }

  function handleClick() {
    setSubmitted(true);
    setCity(cityInput);
  }


### props
  
  import PropTypes from 'prop-types';
  
  const propTypes = {
    currentCondition: PropTypes.string,
    temperature: PropTypes.number,
    submitted: PropTypes.func,
    cityInput: PropTypes.string,
    icon: PropTypes.string
  };
  
  const CurrentWeather = (props) => {
    
    return (
      
          <>
            <div className="weather-location">
              <p>{props.submitted ? props.cityInput : "What's the weather like today"}</p>
            </div>
            <div className="current-weather">
              <div className="icon">
                <img alt={props.currentCondition} src={props.icon} /> 
              </div>
              <div className="temp">
                <CurrentTemp temp={props.temperature} />
                <WeatherDesc description={props.currentCondition} />
              </div>
            </div>
          </>
    );
  };

CurrentWeather.propTypes = propTypes;

### custom hooks

  const {
        city,
        temperature,
        currentCondition,
        icon,
        windSpeed,
        humidity,
        feelsLike,
        cityInput,
        submitted,
        handleCityUpdate,
        handleClick,
    } = useWeatherData();
  
### axios
  
  axios
        .get(endpoint)
        .then(response => {
          const data = response.data;
          setCity(data.location.name)
          setTemperature(data.current.temp_f);
          setCurrentCondition(data.current.condition.text);
          setIcon(data.current.condition.icon)
          setWindSpeed(data.current.wind_mph);
          setHumidity(data.current.humidity);
          setFeelsLike(data.current.feelslike_f)
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [city]);

