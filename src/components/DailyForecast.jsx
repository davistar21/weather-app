import dayjs from "dayjs";
import { useWeather } from "../context/WeatherContext";
import { getWeatherIcon } from "../utils/weatherCodeIcon";

const DailyForecast = () => {
  const { dailyData, isLoading, error } = useWeather();
  const Loader = () => {
    return (
      <blockquote>
        {Array.from({ length: 7 }).map((_, idx) => {
          return <article key={idx}></article>;
        })}
      </blockquote>
    );
  };
  if (isLoading)
    return (
      <section className="daily-forecast">
        <blockquote className="header">Daily forecast</blockquote>
        <Loader />
      </section>
    );
  if (error) return <p>Error loading data: {error}</p>;
  if (
    !dailyData ||
    !dailyData.times ||
    !dailyData.maxTemps ||
    !dailyData.minTemps ||
    !dailyData.weatherCodes
  ) {
    return <p>No daily forecast available.</p>;
  }
  return (
    <section className="daily-forecast">
      <blockquote className="header">Daily forecast</blockquote>
      <blockquote>
        {dailyData.times.map((day, idx) => {
          const maxTemp = Math.round(dailyData.maxTemps[idx]);
          const minTemp = Math.round(dailyData.minTemps[idx]);
          const icon = getWeatherIcon(dailyData.weatherCodes[idx]);
          return (
            <article key={idx}>
              <h3>{dayjs(day).format("ddd")}</h3>
              <img src={`images/icon-${icon}.webp`} />
              <div>
                <span>{maxTemp}&deg;</span>
                <span>{minTemp}&deg;</span>
              </div>
            </article>
          );
        })}
      </blockquote>
    </section>
  );
};

export default DailyForecast;
