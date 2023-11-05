const WindSpeed = (props) => {
    return(
      <>
        <div className="wind-speed">
          <h4>wind speed</h4>
          <p>{props.WindSpeed}mph</p>
        </div>
      </>
    );
};

export default WindSpeed;