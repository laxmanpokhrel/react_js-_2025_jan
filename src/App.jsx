import "./App.css";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./components/ThemeContext";
import WeatherContextProvider from "./components/WeatherContext";
import LocalLevelInfo from "./pages/LocalLevelInfo";
import Todo from "./pages/Todo";
import WeatherInfo from "./pages/WeatherInfo";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="items">
        <Todo />
        <hr/>
        <ThemeContextProvider>
          <WeatherContextProvider>
            <WeatherInfo />
          </WeatherContextProvider>
        </ThemeContextProvider>
      </div>
      <hr />
      <div className="local-level-wrapper">
      <LocalLevelInfo />
      </div>
    </>
  );
};
export default App;
