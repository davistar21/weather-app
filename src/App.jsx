import Header from "./components/Header";
import Main from "./components/Main";
import { WeatherProvider } from "./context/WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <Header />
      <Main />
    </WeatherProvider>
  );
};

export default App;
