import { useState } from "react";
import { useWeather } from "../context/WeatherContext";
import dayjs from "dayjs";
import { getWeatherIcon } from "../utils/weatherCodeIcon";

const HourlyForecast = () => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  const { hourlyData, isLoading, error } = useWeather();
  const [selectedDay, setSelectedDay] = useState(null);
  const Loader = () => {
    return Array.from({ length: 8 }).map((_, idx) => {
      return <div key={idx}></div>;
    });
  };
  if (isLoading)
    return (
      <section className="hourly-forecast">
        <article className="header">
          <h2>Hourly foreCast</h2>
        </article>
        <article className="main">
          <Loader />
        </article>
      </section>
    );
  if (error) return <p>Error loading data: {error}</p>;
  if (!hourlyData || !hourlyData.times || !hourlyData.temperatures) {
    return <p>No hourly data available</p>;
  }

  const groupedData = {};
  hourlyData.times.forEach((time, idx) => {
    const dateKey = dayjs(time).format("YYYY-MM-DD");
    if (!groupedData[dateKey]) groupedData[dateKey] = [];
    groupedData[dateKey].push({
      time,
      temperature: hourlyData.temperatures[idx],
      weatherCode: hourlyData.weatherCodes[idx],
    });
  });
  const availableDays = Object.keys(groupedData);
  const currentDay = selectedDay || availableDays[0];
  const currentDayData = groupedData[currentDay];
  return (
    <section className="hourly-forecast">
      <article className="header ">
        <h2>Hourly forecast</h2>
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setIsDroppedDown(!isDroppedDown)}
          >
            {dayjs(currentDay).isValid()
              ? dayjs(currentDay).format("dddd")
              : "Select Day"}
          </button>
          <div
            className={`dropdown-menu ${isDroppedDown ? "active" : "inactive"}`}
          >
            {availableDays.map((day) => {
              return (
                <div
                  className="menu-item"
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setIsDroppedDown(false);
                  }}
                >
                  {dayjs(day).format("dddd")}
                </div>
              );
            })}
          </div>
        </div>
      </article>
      <article className="main">
        {currentDayData
          .filter(({ time }) => dayjs(time).hour() % 3 === 0)
          .slice(0, 8)
          .map(({ time, temperature, weatherCode }, idx) => {
            const icon = getWeatherIcon(weatherCode, dayjs(time).hour());
            return (
              <div key={idx}>
                <img src={`/images/icon-${icon}.webp`} alt="" />
                <p>{dayjs(time).format("h A")}</p>
                <span>{Math.round(temperature)}&deg;</span>
              </div>
            );
          })}

        {/* <div>
          <img src="/images/icon-snow.webp" alt="" />
          <p>3 PM</p>
          <span>20&deg;</span>
        </div>
        <div>
          <img src="/images/icon-snow.webp" alt="" />
          <p>3 PM</p>
          <span>20&deg;</span>
        </div>
        <div>
          <img src="/images/icon-snow.webp" alt="" />
          <p>3 PM</p>
          <span>20&deg;</span>
        </div>
        <div>
          <img src="/images/icon-snow.webp" alt="" />
          <p>3 PM</p>
          <span>20&deg;</span>
        </div>
        <div>
          <img src="/images/icon-snow.webp" alt="" />
          <p>3 PM</p>
          <span>20&deg;</span>
        </div>
        <div>
          <img src="/images/icon-snow.webp" alt="" />
          <p>3 PM</p>
          <span>20&deg;</span>
        </div>
        <div>
          <img src="/images/icon-snow.webp" alt="" />
          <p>3 PM</p>
          <span>20&deg;</span>
        </div>
        <div>
          <img src="/images/icon-snow.webp" alt="" />
          <p>3 PM</p>
          <span>20&deg;</span>
        </div> */}
      </article>
    </section>
  );
};

export default HourlyForecast;

/*
import { useState } from "react";
import { useWeather } from "../context/WeatherContext";

const HourlyForecast = () => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  const { hourlyData, isLoading, error } = useWeather();

  if (isLoading) return <p>Loading hourly data...</p>;
  if (error) return <p>Error loading data: {error}</p>;
  if (!hourlyData || !hourlyData.times || !hourlyData.temperatures) {
    return <p>No hourly data available</p>;
  }

  return (
    <section className="hourly-forecast">
      <article className="header ">
        <h2>Hourly forecast</h2>
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setIsDroppedDown(!isDroppedDown)}
          >
            Monday
          </button>
          <div
            className={`dropdown-menu ${isDroppedDown ? "active" : "inactive"}`}
          >
            <div className="menu-item">Monday</div>
            {// Add real days dynamically later }
          </div>
        </div>
      </article>

      <article className="main">
        {hourlyData.temperatures.slice(0, 8).map((temp, idx) => {
          const time = hourlyData.times[idx];
          return (
            <div key={idx}>
              {//Use weatherCodes here for image if available}
              <img src="/images/icon-snow.webp" alt="Weather icon" />
              <p>{time.getHours()}:00</p>
              <span>{Math.round(temp)}&deg;</span>
            </div>
          );
        })}
      </article>
    </section>
  );
};
export default HourlyForecast;
*/
