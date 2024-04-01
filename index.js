function displayDate(time) {
  let now = new Date();
  let Hour = now.getHours();
  let minute = now.getMinutes().toString().padStart(2, "0");
  let Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let Days = Day[now.getDay()];
  let currentTime = document.querySelector(".theTime");
  let theDate = (currentTime.innerHTML = `${Days}, ${Hour}:${minute}`);
  return theDate;
}

displayDate();

function searchCity(event) {
  event.preventDefault();
  let city = document.getElementById("Enter-city");
  let theSearch = document.querySelector(".text-box");
  let theCity = (city.innerHTML = theSearch.value);
  console.log(theCity);
  let apiKey = "24e8b867od685a3be0f6dd1ca9tbaf14";
  let url = `https://api.shecodes.io/weather/v1/current?query=${theSearch.value}&key=${apiKey}&units=metric`;
  axios.get(url).then(getTemperature);
}

let searchButton = document.querySelector(".search-glass");
searchButton.addEventListener("click", searchCity);

function getTemperature(response) {
  console.log(response);
  console.log(response.data.temperature.current);
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector(".temp");
  temperatureElement.innerHTML = `${temperature}°C`;
}
