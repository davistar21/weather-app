import DailyForecast from "./DailyForecast";
import EntryMessage from "./EntryMessage";
import HourlyForecast from "./HourlyForecast";
import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import WeatherStats from "./WeatherStats";

const Main = (props) => {
  return (
    <main>
      <EntryMessage />
      <SearchBox />
      <WeatherCard />
      <WeatherStats />
      <DailyForecast />
      <HourlyForecast />
    </main>
  );
};

export default Main;
