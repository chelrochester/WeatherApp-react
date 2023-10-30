import { useEffect } from "react";

const Button = () => {

    
      useEffect(() => {
        
      }, []);
    return(
        <>
            <button className="btn" onClick={() => getData()}>Get Weather</button>
        </>
    );
};

export default Button;