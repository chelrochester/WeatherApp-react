const CurrentTemp = (props) => {
    return(
        <>
        <h1 className="current-temp">{props.temp}°</h1>
        </>
    );
};

export default CurrentTemp;