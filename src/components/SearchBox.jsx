/*const SearchBox = (props) => {
  return (
    <section className="search-box">
      <div className="input-wrapper">
        <img src="/images/icon-search.svg" alt="" />
        <input type="text" placeholder="Search for a place..." />
      </div>
      <button>Search</button>
    </section>
  );
};

export default SearchBox;*/
// SearchBox.jsx
import { useState, useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import debounce from "lodash.debounce";

const SearchBox = () => {
  const { setLocation, setTimezone } = useWeather();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestLoading, setIsSuggestLoading] = useState(false);
  const [skipFetch, setSkipFetch] = useState(false);
  // Debounced version of fetch suggestions
  const fetchSuggestions = debounce(async (q) => {
    if (!q || q.length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      setIsSuggestLoading(true);
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          q
        )}&count=4`
      );
      const data = await res.json();
      // data.results is an array of suggestions
      if (data && data.results) {
        setSuggestions(data.results);
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setSuggestions([]);
    } finally {
      setIsSuggestLoading(false);
    }
  }, 300); // 300ms debounce

  // Effect to call fetchSuggestions whenever query changes
  useEffect(() => {
    if (!skipFetch) fetchSuggestions(query);
    setSkipFetch(false);
    // Cancel pending debounce on unmount
    return () => {
      fetchSuggestions.cancel && fetchSuggestions.cancel();
    };
  }, [query]);

  const handleSelect = async (suggestion) => {
    const lat = suggestion.latitude;
    const lon = suggestion.longitude;
    setLocation({
      latitude: lat,
      longitude: lon,
      name: suggestion.name,
      admin1: suggestion.admin1,
      country: suggestion.country,
    });
    setSuggestions([]);
    setSkipFetch(true);
    // setQuery(
    //   `${suggestion.name}, ${
    //     suggestion.admin1 ? `${suggestion.admin1},` : ""
    //   } ${suggestion.country}`
    // );
    setQuery("");
  };

  return (
    <section className="search-box">
      <div className="input-wrapper">
        <img src="/images/icon-search.svg" alt="Search icon" />
        <input
          type="text"
          placeholder="Search for a place..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <em
            className="clear-input"
            onClick={() => {
              setQuery("");
            }}
          >
            &times;
          </em>
        )}
        {query.length >= 3 && !isSuggestLoading && suggestions.length === 0 && (
          <div className="suggestions-dropdown">
            <section className="no-location ">
              <img src="/images/icon-error.svg" alt="" />
              <span>No location found</span>
            </section>
          </div>
        )}
        {(isSuggestLoading || suggestions.length > 0) && (
          <div className="suggestions-dropdown">
            {isSuggestLoading && (
              <section className="weather-card-loader search-loader">
                <div>
                  <hr />
                  <hr />
                  <hr />
                </div>
              </section>
            )}
            {suggestions.map((s, idx) => (
              <div
                key={s.id || idx}
                className="suggestion-item"
                onClick={() => handleSelect(s)}
              >
                {s.name}, {s.admin1 ? `${s.admin1},` : ""} {s.country}
                {/* adjust fields depending what API gives */}
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => {
          // maybe trigger search explicitly
          // you could pick the first suggestion if exists
          if (suggestions.length > 0) {
            handleSelect(suggestions[0]);
          }
        }}
      >
        Search
      </button>
    </section>
  );
};

export default SearchBox;
