import "./switches.css";

const TabSwitch = ({ activeTab, setActiveTab }) => {
  const handleTabChange = () => {
    setActiveTab(activeTab === "hourlytab" ? "dailytab" : "hourlytab");
  };

  return (
    <ul className="nav">
      <li
        className={activeTab === "hourlytab" ? "active" : ""}
        onClick={handleTabChange}
      >
        Hourly
      </li>
      <li
        className={activeTab === "dailytab" ? "active" : ""}
        onClick={handleTabChange}
      >
        Daily
      </li>
    </ul>
  );
};

export default TabSwitch;
