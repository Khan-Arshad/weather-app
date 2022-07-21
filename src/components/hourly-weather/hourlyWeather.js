import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./hourlyWeather.css";

const HourlyWeather = ({ hourly, tempSymbol }) => {
  const hourOfDay = (timestamp) => {
    const a = new Date(timestamp * 1000);
    const hours = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ];
    return hours[a.getHours()];
  };

  return (
    <>
      <Accordion allowZeroExpanded>
        {hourly.slice(1, 25).map((hourly, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="hourly">
                  <img
                    alt="weather"
                    className="weather-icon-small"
                    src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}.png`}
                  />
                  <label className="hourly">{hourOfDay(hourly.dt)}</label>
                  <label className="description">
                    {hourly.weather[0].description}
                  </label>
                  <label className="temp">
                    <span className="">
                      {tempSymbol === "°C" ? (
                        <>
                          {Math.round(hourly.temp)}
                          {tempSymbol}
                        </>
                      ) : (
                        <>
                          {Math.round((hourly.temp * 9) / 5 + 32)}
                          {tempSymbol}
                        </>
                      )}
                    </span>
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="hourly-details-grid">
                <div className="hourly-details-grid-item">
                  <label>Pressure</label>
                  <label> {hourly.pressure} hPa</label>
                </div>
                <div className="hourly-details-grid-item">
                  <label>Humidity</label>
                  <label> {hourly.humidity} %</label>
                </div>
                <div className="hourly-details-grid-item">
                  <label>Clouds</label>
                  <label> {hourly.clouds} %</label>
                </div>
                <div className="hourly-details-grid-item">
                  <label>Wind Speed</label>
                  <label> {hourly.wind_speed} m/s</label>
                </div>
                <div className="hourly-details-grid-item">
                  <label>Rain</label>
                  <label> {hourly.pop * 100}%</label>
                </div>
                <div className="hourly-details-grid-item">
                  <label>Feels Like</label>
                  <label>
                    {tempSymbol === "°C" ? (
                      <>
                        {Math.round(hourly.feels_like)}
                        {tempSymbol}
                      </>
                    ) : (
                      <>
                        {Math.round((hourly.feels_like * 9) / 5 + 32)}
                        {tempSymbol}
                      </>
                    )}
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default HourlyWeather;
