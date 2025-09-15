import { useWeather } from "../context/WeatherContext";

const Loader = () => {
  return (
    <section className="weather-stats">
      <div>
        <span>Feels Like</span>
        <span>&mdash;</span>
      </div>
      <div>
        <span>Humidity</span>
        <span>&mdash;</span>
      </div>
      <div>
        <span>Wind</span>
        <span>&mdash;</span>
      </div>
      <div>
        <span>Precipitation</span>
        <span>&mdash;</span>
      </div>
    </section>
  );
};

const WeatherStats = () => {
  const { currentStats, isLoading, error } = useWeather();
  if (isLoading) return <Loader />;
  if (error || !currentStats) return <p>Stats unavailable.</p>;

  const { apparentTemp, humidity, windSpeed, precipitation } = currentStats;
  return (
    <section className="weather-stats">
      <div>
        <span>Feels Like</span>
        <span>{Math.round(apparentTemp)}&deg;</span>
      </div>
      <div>
        <span>Humidity</span>
        <span>{Math.round(humidity)}%</span>
      </div>
      <div>
        <span>Wind</span>
        <span>{Math.round(windSpeed)} km/h</span>
      </div>
      <div>
        <span>Precipitation</span>
        <span>{precipitation && precipitation.toFixed(1)} mm</span>
      </div>
    </section>
  );
};

export default WeatherStats;
