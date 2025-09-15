import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDroppedDown(false);
      }
    };
    if (isDroppedDown) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isDroppedDown]);
  return (
    <header>
      <img src="/images/logo.svg" alt="" />
      <div className="dropdown" ref={dropdownRef}>
        <button
          className="dropdown-toggle"
          onClick={() => setIsDroppedDown(!isDroppedDown)}
        >
          <img src="/images/icon-units.svg" alt="" />
          Units
          <img src="/images/icon-dropdown.svg" alt="" />
        </button>
        <div
          className={`dropdown-menu ${isDroppedDown ? "active" : "inactive"}`}
        >
          <div className="menu-group">
            <div className="menu-item">Switch to Imperial</div>
          </div>
          <div className="menu-group">
            <div className="menu-label">Temperature</div>
            <div className="menu-item selected">Celsius (°C)</div>
            <div className="menu-item">Fahrenheit (°F)</div>
          </div>
          <div className="menu-group">
            <div className="menu-label">Wind Speed</div>
            <div className="menu-item selected">km/h</div>
            <div className="menu-item">mph</div>
          </div>
          <div className="menu-group">
            <div className="menu-label">Precipitation</div>
            <div className="menu-item selected">Millimeters (mm)</div>
            <div className="menu-item">Inches (in)</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
