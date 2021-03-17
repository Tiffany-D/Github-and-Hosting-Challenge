function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${days[dayIndex]} ${hours}:${minutes}`;
}
let dateElement = document.querySelector(".date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
dateElement.innerHTML = formatDate(currentTime);
function converttoF(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
let temperatureElement = document.querySelector("#temperature");
let temperature = temperatureElement.innerHTML;
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", converttoF);
function converToC(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", converToC);