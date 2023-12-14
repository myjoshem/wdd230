const data = "https://myjoshem.github.io/wdd230/scoots/data/rentals.json";
const rentalsUrl = data;

  async function apiFetch() {
    try {
        const response = await fetch(rentalsUrl);
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