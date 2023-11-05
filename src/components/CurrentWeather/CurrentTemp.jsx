const CurrentTemp = (props) => {
    console.log('current temp props.temp', props.temp)
    return(
        <>
        <h1 className="current-temp">{props.temp}°</h1>
        </>
    );
};

export default CurrentTemp;