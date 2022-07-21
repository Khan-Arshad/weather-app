import './switches.css';

const TempSwitch = ({ tempSymbol, onTempChange }) => {

    const handleTempChange = () => {
            onTempChange();

      };

    return (
        <ul className="nav nav-temp">
            <li
              className={tempSymbol === "°C" ? "active" : ""}
              onClick={handleTempChange}
            >
              Celsius
            </li>
            <li
              className={tempSymbol === "°F" ? "active" : ""}
              onClick={handleTempChange}
            >
              Farenheit
            </li>
          </ul>
    )
}

export default TempSwitch;