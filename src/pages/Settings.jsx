import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const [settings, setSettings] = useState(
    localStorage.getItem("settings")
      ? JSON.parse(localStorage.getItem("settings"))
      : {
          "--background-color": "#fff",
          "--background-light": "#fff",
          "--primary-color": "rgb(255,0,86)",
          "--shadow-color": "rgba(0,0,0,0.2)",
          "--text-color": "#0A0A0A",
          "--text-light": "#575757",
          "--font-size": "16px",
          "--animation-speed": 1,
        }
  );

  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];

  const primaryColors = [
    "rgb(255,0,86)",
    "rgb(33,150,243)",
    "rgb(255,193,7)",
    "rgb(0,200,83)",
    "rgb(156,39,176)",
  ];

  const fontSizes = [
    { title: "Small", value: "12px" },
    { title: "Medium", value: "16px" },
    { title: "large", value: "20px" },
  ];

  const animationSpeeds = [
    { title: "Slow", value: 2 },
    { title: "Medium", value: 1 },
    { title: "Fast", value: 0.5 },
  ];

  function changeTheme(i) {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    let _settings = { ...settings };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
  }

  function changeColor(i) {
    const _color = primaryColors[i];
    let _settings = { ...settings };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
  }

  function changeFontSize(i) {
    const _size = fontSizes[i];
    let _settings = { ...settings };
    _settings["--font-size"] = _size.value;
    setFontSize(i);
    setSettings(_settings);
  }

  function changeAnimationSpeed(i) {
    let _speed = animationSpeeds[i];
    let _settings = { ...settings };
    _settings["--animation-speed"] = _speed.value;
    setAnimationSpeed(i);
    setSettings(_settings);
  }

  useEffect(() => {
    const _settings = localStorage.getItem("settings");
    if (_settings) {
      setSettings(JSON.parse(_settings));
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <div>
      <div className="section d-block">
        <h2>Preffered theme</h2>
        <div className="options-container">
          <div className="option light" onClick={() => changeTheme(0)}>
            {theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark" onClick={() => changeTheme(1)}>
            {theme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section d-block">
        <h2>Primary Colors</h2>
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div
              key={index}
              className="option light"
              style={{ backgroundColor: color }}
              onClick={() => changeColor(index)}
            >
              {primaryColor === index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="section d-block">
        <h2>Font Size</h2>
        <div className="options-container">
          {fontSizes.map((size, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => changeFontSize(index)}
            >
              <span>
                {size.title}
                {fontSize === index && <FontAwesomeIcon icon={faCheck} />}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="section d-block">
        <h2>Animation Speed</h2>
        <div className="options-container">
          {animationSpeeds.map((speed, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => changeAnimationSpeed(index)}
            >
              <span>
                {speed.title}
                {animationSpeed === index && <FontAwesomeIcon icon={faCheck} />}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
