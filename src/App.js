import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/current-weather/currentWeather";
import Search from "./components/search/search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import DailyWeather from "./components/daily-weather/dailyWeather";
import HourlyWeather from "./components/hourly-weather/hourlyWeather";
import TempSwitch from "./components/switches/tempSwitch";
import TabSwitch from "./components/switches/tabSwitch";

function App() {
  const [search, setSearch] = useState(null);
  const [weather, setWeather] = useState(null);
  const [activeTab, setActiveTab] = useState("hourlytab");
  const [tempSymbol, setTempSymbol] = useState("°C");

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const fetchWeatherData = fetch(
      `${WEATHER_API_URL}lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );

    fetchWeatherData
      .then(async (response) => {
        const weatherData = await response.json();
        setWeather({ city: searchData.label, ...weatherData });
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTempChange = () => {
    setTempSymbol(tempSymbol === "°C" ? "°F" : "°C");
  };

  console.log(weather);

  return (
    <div className="container">
      <h1 className="app-heading">Weather Search</h1>
      <p className="app-description">Get the current, hourly and 7 day forecast</p>
      <Search
        onSearchChange={handleOnSearchChange}
        search={search}
        setSearch={setSearch}
      />

      {weather && (
        <TempSwitch tempSymbol={tempSymbol} onTempChange={handleTempChange} />
      )}

      {weather && (
        <CurrentWeather
          weather={weather.current}
          city={weather.city}
          tempSymbol={tempSymbol}
        />
      )}

      {weather && (
        <div className="Tabs">
          <TabSwitch activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="tabdisplay">
            {activeTab === "hourlytab" ? (
              <HourlyWeather hourly={weather.hourly} tempSymbol={tempSymbol} />
            ) : (
              <DailyWeather weather={weather.daily} tempSymbol={tempSymbol} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
