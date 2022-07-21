import "./currentWeather.css";

const CurrentWeather = ({ weather, city, tempSymbol }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-description">
            {weather.weather[0].description}
          </p>
        </div>
        <img
          alt="weather"
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">
          {tempSymbol === "°C" ? (
            <>
              {Math.round(weather.temp)}
              {tempSymbol}
            </>
          ) : (
            <>
              {Math.round((weather.temp * 9) / 5 + 32)}
              {tempSymbol}
            </>
          )}
        </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {tempSymbol === "°C" ? (
                <>
                  {Math.round(weather.feels_like)}
                  {tempSymbol}
                </>
              ) : (
                <>
                  {Math.round((weather.feels_like * 9) / 5 + 32)}
                  {tempSymbol}
                </>
              )}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{weather.wind_speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{weather.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{weather.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
