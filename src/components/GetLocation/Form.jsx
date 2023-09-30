export default function Form() {
    const [city, setCity] = useState("")

    function handleChange() {
        
    }

    return (
        <>
            <div className="weather-form">
                <form className="form-control">
                    <label htmlFor="city" className="visually-hidden">
                    </label>
                    <input
                    id="city"
                    type="text"
                    className="form-input"
                    onChange={handleChange}
                    ></input>
                </form>
            </div>
        </>
    )
}