function refreshWeather(response) {
    let temperatureElement = documemnt.querySelector("#temperature")
    let temperature = responese.data.temperature.current;
    
    cityElement.innerHTML = serachInput.value;
    temperatureElement.innerHTML = Math.round(temperature);

}

function searchCity(city) {
    let apikey = "370ab147d13obce21d786caff668ftb9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
axios.get(apiUrl).then(refreshWeather)
}

function handleSearchSumbit(event) {
    event.preventDefault();
    let serachInput = document.querySelector("#search-form-input");
    console.log(serachInput.value);
    let cityElement = document.querySelector("#city")
    
    searchCity(serachInput.value)
    //call the API 
    //Search for the 
}

let serachFormElement = document.querySelector("#search-form");
serachFormElement.addEventListener("sumbit", handleSearchSumbit)

searchCity(Sydney)
