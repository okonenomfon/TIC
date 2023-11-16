const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const locationDiv = document.getElementById('location');
const weatherIconDiv = document.getElementById('weather-icon');
const temperatureDiv = document.getElementById('temperature');
const unitsToggleDiv = document.getElementById('units-toggle');
const homeSection = document.getElementById('home-section');
const weatherSection = document.getElementById('weather-section');

searchBtn.addEventListener('click', () => {
    const location = searchInput.value;
    fetchWeatherData(location);
});

function fetchWeatherData(location) {
    const apiKey = '3385b93e4ebe374d11c2075279237fdb';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp } = data.main;
            const { id } = data.sys;

            locationDiv.textContent = name;
            weatherIconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />`;
            temperatureDiv.textContent = temp.toFixed(0) + '°C';

            if (id === 1907294 || id === 1978504 || id === 2001864 || id === 2001656) {
                unitsToggleDiv.style.display = 'none';
            } else {
                unitsToggleDiv.style.display = 'inline';
            }

            homeSection.style.display = 'none';
            weatherSection.style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

unitsToggleDiv.addEventListener('click', () => {
    const temperatureValue = parseFloat(temperatureDiv.textContent);
    const isCelsius = temperatureDiv.textContent.includes('C');

    if (isCelsius) {
        temperatureDiv.textContent = convertToFahrenheit(temperatureValue) + '°F';
    } else {
        temperatureDiv.textContent = convertToCelsius(temperatureValue) + '°C';
    }
});

function convertToFahrenheit(celsius) {
    return (celsius * 1.8 + 32).toFixed(0);
}

function convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) / 1.8).toFixed(0);
}

