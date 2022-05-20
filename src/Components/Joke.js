function Joke({ type, jokas, category, delivery, setup }) {
    return (
        <div>

            {type !== 'twopart'
                ? <div>
                    <p style = {{color: "brown", fontWeight: "900"}}>Single line joke: </p>
                    <p>{jokas}</p>
                </div>

                : <div>
                    <p style = {{color: "blue", fontWeight: "900"}}> Setup type joke:</p>
                    <p style = {{color: "black", fontWeight: "600"}}> Setup:</p>
                    <p>{setup}</p>
                    <p style = {{color: "black", fontWeight: "600"}}>Delivery:</p>
                    <p>{delivery}</p>
                </div>
            }

        </div>
    );
};

export default Joke;