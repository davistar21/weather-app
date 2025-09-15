import dayjs from "dayjs";
import { useWeather } from "../context/WeatherContext";
import { getWeatherIcon } from "../utils/weatherCodeIcon";
import utc from "dayjs/plugin/utc";
import timezonePlugin from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezonePlugin);
const WeatherCard = () => {
  const { isLoading, error, location, timezone, currentStats } = useWeather();
  const { temp, weatherCode } = currentStats;
  const icon = getWeatherIcon(weatherCode);
  // console.log(dayjs().tz("Asia/Tokyo").format());
  if (isLoading)
    return (
      <section className="weather-card-loader">
        <div>
          <hr />
          <hr />
          <hr />
        </div>
        <span>Loading...</span>
      </section>
    );
  return (
    <section className="weather-card">
      <img src={`/images/icon-${icon}.webp`} alt="" />
      <div>
        <span>
          {location.name}, {location.admin1}
        </span>
        <span>{location.country}</span>
        <small>{dayjs().tz(timezone).format("dddd, MMM D, YYYY")}</small>
        <small className="time">{dayjs().tz(timezone).format("h:mm A")}</small>
      </div>
      <h4 className="temp">{Math.round(temp)}&deg;</h4>
    </section>
  );
};

export default WeatherCard;
