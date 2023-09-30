const Button = () => {

    function handleClick() {
        console.log("clicked!")
      }

    return(
        <>
            <button className="btn" onClick={handleClick}>Get Weather</button>
        </>
    );
};

export default Button;