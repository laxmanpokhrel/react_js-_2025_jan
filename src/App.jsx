import './App.css';
import Navbar from './components/Navbar';
import Todo from './pages/Todo';
import WeatherInfo from './pages/WeatherInfo';

const App = () => {
  return (
    <>
     <Navbar />
      <div className='items'>
      <Todo />
      <WeatherInfo />
    </div>
    </>
  );
};
export default App;
