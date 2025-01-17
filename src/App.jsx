import { useState } from 'react';
import Component from './Component';
import SayHi from './SayHi';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // Reactivity
  // 1. Listening to the changes
  // 2. Remembering the the changes

  // 'useState' initializes the state
  const [count, setCount] = useState(0);
  const [tempCount, setTempCount] = useState(0);

  // Count has the current value
  // SetCount update the value of count

  // 'count' is a state
  // 'setCount' is the function that updates the state

  // Best way of updating a state is through callback function because state updates are always asyncronous

  return (
    <>
      <div>
        <Component />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + cool gyus!</h1>

      <SayHi name="abc" isGoodHuman={false} />

      <div className="card">
        {/* Parent Button */}
        <button
          onClick={(e) => {
            console.log('From Parent: ', e.target);
            setCount((prevCount) => {
              return prevCount + 1;
            });
            setTempCount((previousValue) => {
              return previousValue + 10;
            });
          }}
        >
          count is {count}
          {/* Child Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log('From Child: ', e.target);
              setCount((prevCount) => {
                return prevCount + 1;
              });
              setTempCount((previousValue) => {
                return previousValue + 10;
              });
            }}
          >
            count is {count}
          </button>
        </button>

        <input
          type="radio"
          onChange={(e) => {
            console.log('🚀 ~ App ~ e:', e.target.value);
          }}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more lore1
      </p>
    </>
  );
}

export default App;
