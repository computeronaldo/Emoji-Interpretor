import { useState } from "react";
import flagsDirectory from "./flagsData";
import "./styles.css";

function App() {
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const getCountryName = (countryEmoji) => {
    return flagsDirectory.find((item) => {
      return item.emoji === countryEmoji;
    })?.country;
  };

  const flagClickHandler = (e) => {
    const countryEmoji = e.target.innerHTML;
    const countryName = getCountryName(countryEmoji);
    setCountry(countryName);
  };

  const inputChangeHandler = (e) => {
    const countryName = getCountryName(e.target.value);
    if (countryName === undefined && e.target.value !== "") {
      setMessage("That's not a valid emoji");
    }
    if (e.target.value === "") {
      setMessage("");
    }

    setCountry(countryName);
  };

  const flagsView = (flagsDirectory) => {
    return (
      <ul className="flat-list">
        {flagsDirectory.map((item) => {
          return (
            <li key={item.country} onClick={flagClickHandler}>
              {item.emoji}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="app">
      <div className="hero">
        <h1>Inside Out!!</h1>
        <input onChange={inputChangeHandler}></input>
        <h2>Countries we know!</h2>
        {flagsView(flagsDirectory)}
      </div>
      <span>{country === undefined ? message : country}</span>
    </div>
  );
}

export default App;
