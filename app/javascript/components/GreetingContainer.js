import React from 'react';
import { useSelector } from 'react-redux';
import Greeting from './Greeting';

const GreetingContainer = () => {
  const { greetings } = useSelector((state) => state.greetings);
  return (
    <div>
      {greetings.map((item) => (
        <Greeting
          key={item.id}
          message={item.message}
        />
      ))}
    </div>
  );
};

export default GreetingContainer;
