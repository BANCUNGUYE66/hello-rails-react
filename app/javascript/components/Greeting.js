import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api/random_greeting')
      .then(response => response.json())
      .then(data => {
        setGreeting(data.greeting);
      })
      .catch(error => console.error('Error fetching random greeting:', error));
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
