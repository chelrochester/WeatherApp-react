

const Button = () => {

    function onClick() {
        console.log("Button clicked");
    }
     
    return(
        <>
            <button className="btn" onClick={onClick}>Get Weather</button>
        </>
    );
};

export default Button;