function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#current-weather");

  temperatureElement.innerHTML = response.data.temperature.current;
  console.log(response.data.temperature.current);
}

function searchCity(city) {
  let apiKey = "a3af3t89ob96e0f9a620e92909b7a4bf";
  let apiUrl = ` https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(updateWeatherData);
}

function searchFormInput(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchFormInput);
