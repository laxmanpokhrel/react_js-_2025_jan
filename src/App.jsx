import Todo from "./Todo";
import "./App.css";
import ThemeContextProvider from "./components/component/ThemeContext";
import { WeatherContextProvider } from "./components/component/WeatherContext";
import WeatherInfo from "./Todo/WeatherInfo";

function App() {
  return (
   <div > 
        <Todo />
        <ThemeContextProvider>
          <WeatherContextProvider>
            <WeatherInfo />
          </WeatherContextProvider>
        </ThemeContextProvider>
      </div>
  );
}

export default App;
