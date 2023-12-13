const apiKey = 'b0e733189f00d051721271e9820dbcfe';
const lat = "20.423195241254767";
const lon = "-86.92150594410231";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

const currentTemp = document.querySelector('#current-temp');
const currentHumidity = document.querySelector('#current-humidity');
const weatherDescription = document.querySelector('#weather-description');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
           /*  console.log(JSON.stringify(data));  *///testing only
             displayResults(data); // uncomment after testing
        } else {
            throw Error(await response.text());
        }
     } catch (error) {
        console.group(error);
     }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;
    currentHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = `${data.weather[0].description.toUpperCase()}`;
    const iconImage = document.createElement('img');
    iconImage.id = 'weather-icon';
    iconImage.src = icon;
    iconImage.alt = 'Weather Icon';
    currentTemp.appendChild(iconImage);
    weatherDescription.innerHTML = desc;
    // const description = document.createElement('span');
    // description.id = 'weather-description';
    // description.innerHTML = desc;
    // currentHumidity.appendChild(description);
}