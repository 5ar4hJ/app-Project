let weather = {
  paris: { temp: 19.7, humidity: 80 },
  tokyo: { temp: 17.3, humidity: 50 },
  lisbon: { temp: 30.2, humidity: 20 },
  "san francisco": { temp: 20.9, humidity: 100 },
  oslo: { temp: -5, humidity: 20 },
};
//let city = prompt("Enter a city");
//city = city.toLowerCase();
//city = city.trim();
//if (weather[city] !== undefined) {
//let temperature = weather[city].temp;
//let celciusTemp = Math.round(temperature);
//let farenheitTemp = Math.round((temperature * 9) / 5 + 32);
//let humidity = weather[city].humidity;

//alert(
//`It is currently ${celciusTemp}°C (${farenheitTemp})°F in ${city} with a humidity of ${humidity}%`alert( } else { );
//`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`;
//);
//}
function displayedDate(toDate) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[toDate.getDay()];
  let hours = toDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = toDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let time = `${hours}:${minutes}`;
  return `${day} ${time}`;
}
let currentDate = document.querySelector("#current-date");
let toDate = new Date();
currentDate.innerHTML = displayedDate(toDate);

function searching(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-engine-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchCity.value;

  function displayTemperature(response) {
    let city = response.data.city;
    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = `${city}`;
    let temp = Math.round(response.data.temperature.current);
    let currentTemp = document.querySelector("#current-temp");
    currentTemp.innerHTML = `${temp}`;
    //let icon = response.data.condition.icon;
    //let emojiElement = document.querySelector("#emoji");
    //emojiElement.innerHTML = `${icon}`;
  }
  let city = `${searchCity.value}`;
  let apiKey = "o974f949a162ca8at386ecd74f5bc0de";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let searchCity = document.querySelector("#search-city-form");
searchCity.addEventListener("submit", searching);
