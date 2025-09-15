import { createContext, useContext, useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo"; // assuming this works as in your example
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: 6.45444,
    longitude: 3.39194,
    name: "Lagos, Nigeria",
  });
  const [timezone, setTimezone] = useState("Africa/Lagos");
  // const [timezone, setTimezone] = useState(
  // Intl.DateTimeFormat().resolvedOptions().timeZone
  // );

  const today = new Date();
  const start_date = today.toISOString().split("T")[0]; // e.g., "2025-09-13"
  const end_date = new Date(today.getTime() + 6 * 86400000) // +6 days
    .toISOString()
    .split("T")[0]; // Weather data states
  const [hourlyData, setHourlyData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [currentStats, setCurrentStats] = useState({});

  // Loading & error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch weather
  const fetchWeather = async (lat, lon) => {
    setIsLoading(true);
    setError(null);

    const url = "https://api.open-meteo.com/v1/forecast";

    const params = {
      latitude: lat,
      longitude: lon,
      hourly:
        "temperature_2m,apparent_temperature,relative_humidity_2m,windspeed_10m,precipitation,weathercode",
      daily: "temperature_2m_max,temperature_2m_min,weathercode",
      timezone: "auto",
      start_date,
      end_date,
    };

    // Instead of try-catch, use .then/.catch chaining for easier understanding
    fetchWeatherApi(url, params)
      .then((responses) => {
        const response = responses[0];
        const hourly = response.hourly();
        const daily = response.daily();
        setTimezone(response.timezone());

        // Build time arrays for hourly
        const start = Number(hourly.time());
        const end = Number(hourly.timeEnd());
        const interval = hourly.interval();
        const hourlyTimes = [...Array((end - start) / interval)].map((_, i) =>
          dayjs
            .unix(start + i * interval)
            .utc()
            .toDate()
        );

        let currentIndex = hourlyTimes.findIndex(
          (t) => t.getTime() >= today.getTime()
        );
        if (currentIndex === -1) currentIndex = 0; // fallback

        const hourlyTemps = Array.from(hourly.variables(0).valuesArray());
        const hourlyWeatherCodes = Array.from(
          hourly.variables(5).valuesArray()
        );
        const apparentTemps = Array.from(hourly.variables(1).valuesArray());
        const humidities = Array.from(hourly.variables(2).valuesArray());
        const windSpeeds = Array.from(hourly.variables(3).valuesArray());
        const precipitations = Array.from(hourly.variables(4).valuesArray());
        const weatherCodes = Array.from(hourly.variables(5).valuesArray());

        // For daily, similar idea
        const dailyMaxTemps = daily.variables(0).valuesArray();
        const dailyMinTemps = daily.variables(1).valuesArray();
        const dailyWeatherCodes = daily.variables(2).valuesArray();
        const dailyTimes = Array.from({ length: 7 }, (_, i) => {
          const date = new Date(today.getTime() + i * 86400000);
          return date.toISOString().split("T")[0];
        });

        // Update state
        setHourlyData({
          times: hourlyTimes,
          temperatures: hourlyTemps,
          weatherCodes: hourlyWeatherCodes,
        });

        setDailyData({
          times: dailyTimes,
          maxTemps: dailyMaxTemps,
          minTemps: dailyMinTemps,
          weatherCodes: dailyWeatherCodes,
        });
        // Update state with a separate "currentStats" object
        setCurrentStats({
          apparentTemp: apparentTemps[currentIndex],
          humidity: humidities[currentIndex],
          windSpeed: windSpeeds[currentIndex],
          precipitation: precipitations[currentIndex],
          temp: hourlyTemps[currentIndex],
          weatherCode: weatherCodes[currentIndex],
          time: hourlyTimes[currentIndex],
        });

        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching weather");
        setIsLoading(false);
      });
  };

  // Fetch weather automatically when location changes
  useEffect(() => {
    fetchWeather(location.latitude, location.longitude);
  }, [location]);

  // Context value to provide
  const value = {
    location,
    setLocation,
    hourlyData,
    dailyData,
    currentStats,
    isLoading,
    error,
    timezone,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
