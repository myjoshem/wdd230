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
   
  ];
  
 // Function to generate table rows
function generateTableRows() {
    const tbody = document.querySelector('.rental-pricing tbody');
    
    data[0].pricingTable.forEach(rentalType => {
      for (const key in rentalType) {
        if (rentalType.hasOwnProperty(key)) {
          const rowData = rentalType[key][0];
  
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${rowData.description}</td>
            <td>${rowData.maxPersons}</td>
            <td>${rowData.reservation[0].halfDay}</td>
            <td>${rowData.reservation[0].fullDay}</td>
            <td>${rowData.walkIn[0].halfDay}</td>
            <td>${rowData.walkIn[0].fullDay}</td>
          `;
          
          tbody.appendChild(row);
        }
      }
    });
  }
  
  // Don't forget to Call the function, ahem
  generateTableRows();