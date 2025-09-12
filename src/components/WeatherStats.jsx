const WeatherStats = (props) => {
  return (
    <section className="weather-stats">
      <div>
        <span>Feels Like</span>
        <span>18&deg;</span>
      </div>
      <div>
        <span>Humidity</span>
        <span>46%</span>
      </div>
      <div>
        <span>Wind</span>
        <span>14 km/h</span>
      </div>
      <div>
        <span>Precipitation</span>
        <span>0 mm</span>
      </div>
    </section>
  );
};

export default WeatherStats;
