
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

export default Humidity;