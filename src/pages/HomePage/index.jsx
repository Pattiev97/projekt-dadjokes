import { useState, useEffect } from 'react';
import './style.css';
import { Joke } from '../Joke';

export const HomePage = () => {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch(`http://localhost:4000/api/jokes`);
      const data = await response.json();
      const jokes = data.data;
      setJoke(jokes);
    };

    fetchJokes();
  }, []);

  return (
    <div className="container">
      {joke.map((item) => (
        <Joke
          key={item.id}
          userAvatar={item.avatar}
          userName={item.name}
          text={item.text}
          likes={item.likes}
          dislikes={item.dislikes}
        />
      ))}
    </div>
  );
};
