function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#current-weather");
  let temperature = response.data.temperature.current;
  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;

  console.log(response.data);
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
