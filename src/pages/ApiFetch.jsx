import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../components/ThemeContext';

async function callApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
}

const ApiFetch = () => {
  const { theme, authentication, toggleTheme, logout, login } =
    useContext(ThemeContext);

  console.log('🚀 ~ App ~ theme:', theme);

  const [responseData, setResponseData] = useState({});
  const [count, setCount] = useState(0);

  // callApi();

  useEffect(() => {
    // Immediately invoked function
    (async () => {
      if (!Object.keys(responseData).length) {
        const callApiResponse = await callApi();
        setResponseData(callApiResponse);
      }
    })();
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => {
          toggleTheme();
          setCount((prev) => prev + 1);
        }}
      >
        Click me to count
      </button>
      <h2>Response Data</h2>
      <p>{JSON.stringify(responseData)}</p>
    </div>
  );
};

export default ApiFetch;
