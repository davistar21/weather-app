const WeatherCard = (props) => {
  return (
    <section className="weather-card">
      <div>
        <span>Berlin, Germany</span>
        <small>Tuesday, Aug 5, 2025</small>
      </div>
      <h4 className="temp">20&deg;</h4>
    </section>
  );
};

export default WeatherCard;
