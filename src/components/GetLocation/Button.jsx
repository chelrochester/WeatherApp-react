const Button = () => {

    function handleClick() {
        console.log("clicked!")
      }

    return(
        <>
            <button className="btn" onClick={handleClick}>Find City</button>
        </>
    );
};

export default Button;