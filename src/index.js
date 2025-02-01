function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#humidity");
    let descriptionElement = document.querySelector("#description");
    let windSpeedElement = document.querySelector("#wind-speed");


    let temperature = response.data.temperature.current;
    let humidity = response.data.temperature.humidity;
    let description = response.data.condition.description;
    let windSpeed = response.data.wind.speed;
    let city = response.data.city;


    cityElement.innerHTML = city;
    temperatureElement.innerHTML = `${Math.round(temperature)}°C`;
    humidityElement.innerHTML = `${humidity}%`;
    descriptionElement.innerHTML = description;
    windSpeedElement.innerHTML = `${Math.round(windSpeed)} km/h`;
}

function searchCity(city) {
    let apiKey = "370ab147d13obce21d786caff668ftb9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
}

searchCity("Sydney");
