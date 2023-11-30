const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.25&lon=-113.28&appid=b0e733189f00d051721271e9820dbcfe&units=imperial';

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
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;//challenge:
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = `${data.weather[0].description.toUpperCase()}`;//challenge: capitalization
    weatherIcon.setAttribute('src', `${icon}`);
    weatherIcon.setAttribute('alt', 'Weather icon');
    captionDesc.textContent = `${desc}`;

}