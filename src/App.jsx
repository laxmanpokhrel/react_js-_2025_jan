import './App.css';
import Navbar from './components/Navbar';
import ThemeContextProvider from './components/ThemeContext';
import Todo from './pages/Todo';
import WeatherInfo from './pages/WeatherInfo';

const App = () => {
  return (
    <>
     <Navbar />
      <div className='items'>
      <Todo />
      <ThemeContextProvider>
      <WeatherInfo />
      </ThemeContextProvider>
    </div>
    </>
  );
};
export default App;
