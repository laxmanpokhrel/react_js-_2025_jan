import { useContext, useEffect } from 'react';
import './App.css';
import ApiFetch from './pages/ApiFetch';
import Todo from './pages/Todo';
import { ThemeContext } from './components/ThemeContext';

const App = () => {
  return (
    <div>
      {/* <Todo /> */}
      <ApiFetch />
    </div>
  );
};
export default App;
