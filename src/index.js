function handleSearchSumbit(event) {
    event.preventDefault();
    let serachInput = document.querySelector("#search-form-input");
    console.log(serachInput.value);
    let cityElement = document.querySelector("#city")
    cityElement.innerHTML = serachInput.value;
    //call the API 
    //Search for the 
}

let serachFormElement = document.querySelector("#search-form");
serachFormElement.addEventListener("sumbit", handleSearchSumbit )
