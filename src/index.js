function updateWeatherData(response) {
  let iconElement = document.querySelector("#icon");
  let temperatureElement = document.querySelector("#current-weather");
  let temperature = response.data.temperature.current;
  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#city");
  let countryElement = document.querySelector("#country");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);


  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" >`;
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  countryElement.innerHTML = response.data.country;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
  timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  return `${day} , ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "a3af3t89ob96e0f9a620e92909b7a4bf";
  let apiUrl = ` https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function searchFormInput(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchFormInput);

searchCity("Porto");
