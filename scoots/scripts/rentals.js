const data = [{
    "pricingTable": [
        {
            "rentalType1": [
                {
                    "description": "Scooter: Honda Metro",
                    "maxPersons": 1,
                    "reservation": [
                        {
                            "halfDay": "$20",
                            "fullDay": "$30"
                        }
                    ],
                    "walkIn": [
                        {
                            "halfDay": "$25",
                            "fullDay": "$35"
                        }
                    ]
                }
            ],
            "rentalType2": [
                {
                    "description": "Scooter: Honda Dio",
                    "maxPersons": 1,
                    "reservation": [
                        {
                            "halfDay": "$30",
                            "fullDay": "$40"
                        }
                    ],
                    "walkIn": [
                        {
                            "halfDay": "$35",
                            "fullDay": "$45"
                        }
                    ]
                }
            ],
            "rentalType3": [
                {
                    "description": "Scooter: Honda PCX150",
                    "maxPersons": 1,
                    "reservation": [
                        {
                            "halfDay": "$40",
                            "fullDay": "$50"
                        }
                    ],
                    "walkIn": [
                        {
                            "halfDay": "$45",
                            "fullDay": "$55"
                        }
                    ]
                }
            ],
            "rentalType4": [
                {
                    "description": "ATV: Honda Metro",
                    "maxPersons": 1,
                    "reservation": [
                        {
                            "halfDay": "$50",
                            "fullDay": "$70"
                        }
                    ],
                    "walkIn": [
                        {
                            "halfDay": "$60",
                            "fullDay": "$80"
                        }
                    ]
                }
            ],
            "rentalType5": [
                {
                    "description": "Jeep Wrangler: 4-door with A/C",
                    "maxPersons": 1,
                    "reservation": [
                        {
                            "halfDay": "$70",
                            "fullDay": "$100"
                        }
                    ],
                    "walkIn": [
                        {
                            "halfDay": "$85",
                            "fullDay": "$125"
                        }
                    ]
                }
            ],
            "rentalType6": [
                {
                    "description": "Jeep Wrangler: 2-door",
                    "maxPersons": 1,
                    "reservation": [
                        {
                            "halfDay": "$60",
                            "fullDay": "$85"
                        }
                    ],
                    "walkIn": [
                        {
                            "halfDay": "$70",
                            "fullDay": "$90"
                        }
                    ]
                }
            ]
        }
    ]
}
    // Sample data here
  ];
  
  const tbody = document.querySelector('.rental-pricing tbody');
  
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.rentalType}</td>
      <td>${item.maxPersons}</td>
      <td>${item.reservationHalfDay}</td>
      <td>${item.reservationFullDay}</td>
      <td>${item.walkInHalfDay}</td>
      <td>${item.walkInFullDay}</td>
    `;
    tbody.appendChild(row);
  });


// async function apiFetch() {
//     try {
//         const response = await fetch(url);
//         if(response.ok) {
//             const data = await response.json();
//            /*  console.log(JSON.stringify(data));  *///testing only
//              displayResults(data); // uncomment after testing
//         } else {
//             throw Error(await response.text());
//         }
//      } catch (error) {
//         console.group(error);
//      }
// }

// apiFetch();

// function displayResults(data) {
//     currentTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;
//     currentHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
//     const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let desc = `${data.weather[0].description.toUpperCase()}`;
//     const iconImage = document.createElement('img');
//     iconImage.id = 'weather-icon';
//     iconImage.src = icon;
//     iconImage.alt = 'Weather Icon';
//     currentTemp.appendChild(iconImage);
//     weatherDescription.innerHTML = desc;



//     const baseURL = "https://myjoshem.github.io/wdd230";
//     const linksURL = "https://myjoshem.github.io/wdd230/data/links.json";
//     const lessonList = document.querySelector("#links");
    
//     async function getLinks() {
//         const response = await fetch(linksURL);
//         const data = await response.json();
//         console.log(data);
//         displayLinks(data.lessons);
//     }
    
//     getLinks();
    


// //pass in the data.lessons JSON array from our getLinks() function
// const displayLinks = (weeks) => {
//     //the first for loop takes each lesson or WEEK from the json array and creates a li element.
//     weeks.forEach((week) => {
//         let listItem = document.createElement("li");    
//         listItem.textContent = `Lesson ${week.lesson}: `;
//          //this second, nested for loop will iterate through the 'links' array within each lesson
//         week.links.forEach((link) => {
//             let linkList = document.createElement("a");
//             linkList.setAttribute('href', `${link.url}`);
//             linkList.setAttribute('title', `${link.tooltip}`);
//             linkList.setAttribute('target', `${link.target}`);
//             linkList.textContent = `  ${link.title}   |   `;
//             listItem.appendChild(linkList);
//             lessonList.appendChild(listItem)
//         }     
//     )});
// }