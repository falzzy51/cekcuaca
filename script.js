const apiKey = '71d16f5e94697498f0124dc57281f1b4';

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            const cityName = data.name;
            const description = data.weather[0].description;
            const temperature = data.main.temp + ' °C';
            const humidity = 'Kelembapan: ' + data.main.humidity + '%';
            const windSpeed = 'Kecepatan Angin: ' + data.wind.speed + ' m/s';
            const iconCode = data.weather[0].icon;

            document.getElementById('city-name').textContent = cityName;
            document.getElementById('description').textContent = description;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('humidity').textContent = humidity;
            document.getElementById('wind-speed').textContent = windSpeed;

            const oldIcon = document.querySelector('.weather-icon');
            if (oldIcon) {
                oldIcon.remove();
            }

            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            const iconImage = document.createElement('img');
            iconImage.src = iconUrl;
            iconImage.alt = description;
            iconImage.classList.add('weather-icon');
            document.getElementById('weather-info').insertBefore(iconImage, document.getElementById('weather-info').firstChild);
        })
        .catch(error => {
            console.log(error);
            alert('Error fetching weather data');
        });
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

var video = document.getElementById("myVideo");
video.playbackRate = 0.5;
function changeSpeed(rate){
    video.playbackRate = rate;
}

document.getElementById("myVideo").play();
