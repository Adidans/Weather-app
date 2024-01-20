import "./styles.css";
import searchIcon from "./searchIcon.svg";

let key = "2d40ca9ba2804c09af6151345242001";

let place = document.getElementById("place");
let searchBtnIcon = document.getElementById("searchBtnIcon");
searchBtnIcon.src = searchIcon;
let loader = document.querySelector(".lds-ripple");
let cityNotFound = document.querySelector("h2");
let weatherIcon = document.getElementById("weatherIcon");
weatherIcon.style.display = "none";
let temperature = document.getElementById("temperature");
let cityElement = document.getElementById("city");
let humidityElement = document.getElementById("humidityData");
let windSpeedElement = document.getElementById("windSpeedData");
let windSpeedLabel = document.getElementById("windSpeedLabel");
let humidityLabel = document.getElementById("humidityLabel");
windSpeedLabel.style.display = "none";
humidityLabel.style.display = "none";

async function getWeather(searchedCity) {
    try {
        cityNotFound.classList.add("hidden");
        loader.classList.remove("hidden");
        weatherIcon.style.display = "none";
        temperature.textContent = "";
        temperature.style.display = "none";
        windSpeedLabel.style.display = "none";
        humidityLabel.style.display = "none";
        humidityElement.textContent = "";
        humidityElement.style.display = "none";
        windSpeedElement.textContent = "";
        windSpeedElement.style.display = "none";
        cityElement.textContent = "";
        cityElement.style.display = "none";

        let response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchedCity}`
        );
        if (!response.ok) {
            cityNotFound.classList.remove("hidden");
            throw new Error("City not found");
        }
        let data = await response.json();
        cityNotFound.classList.add("hidden");
        loader.classList.add("hidden");
        return {
            city: data.location.name,
            icon: data.current.condition.icon,
            temp: data.current.temp_c,
            humidity: data.current.humidity,
            windSpeed: data.current.wind_kph,
        };
    } catch (err) {
        loader.classList.add("hidden");
        console.log(err);
        return { error: err.message };
    }
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let city = place.value;
    getWeather(city).then((data) => {
        if (data.error) {
            return;
        }
        weatherIcon.src = data.icon;
        weatherIcon.style.display = "block";
        temperature.textContent = `${data.temp}°C`;
        temperature.style.display = "block";
        cityElement.textContent = data.city;
        cityElement.style.display = "block";
        humidityElement.textContent = `${data.humidity}%`;
        windSpeedLabel.style.display = "block";
        windSpeedElement.style.display = "block";
        humidityLabel.style.display = "block";
        humidityElement.style.display = "block";
        windSpeedElement.textContent = `${data.windSpeed} km/h`;
    });
    place.value = "";
});
