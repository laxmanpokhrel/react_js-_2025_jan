import React, { useState, useEffect } from 'react';

const LifeCycleFunction = () => {
  const [count, setCount] = useState(0);

  // Mimics componentDidMount and componentWillUnmount
  useEffect(() => {
    console.log('useEffect - componentDidMount');
    const timer = setInterval(() => {
      console.log('Interval running...');
    }, 1000);

    return () => {
      console.log('useEffect - componentWillUnmount');
      clearInterval(timer);
    };
  }, []);

  // Mimics componentDidUpdate (runs when count changes)
  useEffect(() => {
    console.log('useEffect - componentDidUpdate (count changed)');
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  console.log('render');
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default LifeCycleFunction;
