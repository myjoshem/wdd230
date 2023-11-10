const baseURL = "https://myjoshem.github.io/wdd230";
const linksURL = "https://myjoshem.github.io/wdd230/data/links.json";
const lessonList = document.querySelector("#links");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.lessons);
}

getLinks();

//pass in the data.lessons JSON array from our getLinks() function
const displayLinks = (weeks) => {
    //the first for loop takes each lesson or WEEK from the json array and creates a li element.
    weeks.forEach((week) => {
        let listItem = document.createElement("li");    
        listItem.textContent = `Lesson ${week.lesson}: `;
         //this second, nested for loop will iterate through the 'links' array within each lesson
        week.links.forEach((link) => {
            let linkList = document.createElement("a");
            linkList.setAttribute('href', `${link.url}`);
            linkList.textContent = `  ${link.title}   |   `;
            listItem.appendChild(linkList);
            lessonList.appendChild(listItem)
        }     
    )});
}