import { useState, useEffect } from 'react';

const LifeCycleFunction = () => {
  const [count, setCount] = useState(0);

  // Mimics componentDidMount and componentWillUnmount
  useEffect(() => {
    console.log('2. useEffect - componentDidMount');

    const timer = setInterval(() => {
      console.log('Interval running...');
    }, 1000);

    // Component unmount
    // Cleanup function -> runs when dependencies change + when component unmounts
    // We use cleanup functions to clear timeout, intervals, events or any side effects
    return () => {
      console.log('4. useEffect - componentWillUnmount');
      console.log('4. Cleanup function');
      clearInterval(timer);
    };
  }, []);

  // useEffect(
  //   () => {
  //     // Some block of code that deals with side effects.

  //     // Cleanup function
  //     return () => {};
  //   },
  //   [
  //     // dependencies
  //   ]
  // );

  // Mimics componentDidUpdate (runs when count changes)
  useEffect(() => {
    console.log('3. useEffect - componentDidUpdate (count changed)');

    return () => {
      console.log('Running cleanup function.');
    };
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  console.log('1. render');
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default LifeCycleFunction;
