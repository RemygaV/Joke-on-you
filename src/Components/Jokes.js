import React, { useEffect, useState } from 'react';
import Joke from './Joke';

function Jokes(props) {

    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
            .then(response => response.json())
            .then(data => setJokes(data.jokes))
            .catch(err => console.log(EvalError))
    }, []);

    return (
        <div>
            {jokes.map((jok) => (
                <Joke
                    key={jok.id}
                    type={jok.type}
                    category={jok.category}
                    jokas={jok.joke} 
                    setup={jok.setup}
                    delivery={jok.delivery}/>
             
            ))}
          
        </div>
    );
};

export default Jokes;