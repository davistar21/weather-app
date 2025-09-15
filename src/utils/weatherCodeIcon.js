// utils/weatherCodeIcon.js
export const getWeatherIcon = (code, hour) => {
  const isNight = hour < 6 || hour >= 21; // you can tweak this range

  switch (true) {
    case code === 0:
      return isNight ? "overcast" : "sunny";

    case code >= 1 && code < 3:
      return isNight ? "overcast" : "partly-cloudy";

    case code === 3:
      return "overcast";

    case code >= 45 && code <= 48:
      return "fog";

    case code >= 51 && code <= 57:
      return "drizzle";

    case code >= 61 && code <= 67:
      return "rain";

    case code >= 71 && code <= 77:
      return "snow";

    case code >= 80 && code <= 82:
      return "rain";

    case code >= 85 && code <= 86:
      return "snow";

    case code >= 96 && code <= 99:
      return "storm";

    default:
      return "overcast";
  }
};
