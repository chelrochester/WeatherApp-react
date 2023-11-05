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

export default FeelsLike;