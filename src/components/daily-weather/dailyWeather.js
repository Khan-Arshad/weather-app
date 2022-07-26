import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./dailyWeather.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const DailyWeather = ({ weather, tempSymbol }) => {
  const dayOfWeek = (timestamp) => {
    const a = new Date(timestamp * 1000);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[a.getDay()];
  };
  return (
    <>
      <Accordion allowZeroExpanded>
        {weather.slice(1).map((day, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily">
                  <img
                    alt="weather"
                    className="weather-icon-small"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  />
                  <label className="day">{dayOfWeek(day.dt)}</label>
                  <label className="description">
                    {day.weather[0].description}
                  </label>
                  <label className="min-max">
                    <span className="min">
                      {tempSymbol === "°C" ? (
                        <>
                          {Math.round(day.temp.min)}
                          {tempSymbol}
                        </>
                      ) : (
                        <>
                          {Math.round((day.temp.min * 9) / 5 + 32)}
                          {tempSymbol}
                        </>
                      )}
                    </span>{" "}
                    <span className="max">
                      {tempSymbol === "°C" ? (
                        <>
                          {Math.round(day.temp.max)}
                          {tempSymbol}
                        </>
                      ) : (
                        <>
                          {Math.round((day.temp.max * 9) / 5 + 32)}
                          {tempSymbol}
                        </>
                      )}
                    </span>
                  </label>
                  <span className="arrow">
                  <AccordionItemState>
                    {({ expanded }) => (expanded ? <IoMdArrowDropup /> : <IoMdArrowDropdown />)}
                </AccordionItemState>
                    </span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                  <label> {day.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity</label>
                  <label> {day.humidity} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                  <label> {day.clouds} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind Speed</label>
                  <label> {day.wind_speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Rain</label>
                  <label> {day.pop * 100}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels Like</label>
                  <label>
                    {tempSymbol === "°C" ? (
                      <>
                        {Math.round(day.feels_like.day)}
                        {tempSymbol}
                      </>
                    ) : (
                      <>
                        {Math.round((day.feels_like.day * 9) / 5 + 32)}
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

export default DailyWeather;
