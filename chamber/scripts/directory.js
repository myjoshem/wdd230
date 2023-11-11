const url = 'https://myjoshem.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getBusinessData() {
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
        const data = await response.json();
        console.table(data);
        displayDirectory(data.members);
    } else {
        console.log(response.status);
    }
}

const displayDirectory = (members) => {
    members.forEach((member) => {
        //create elements
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        let logo = document.createElement("img");

       //add content to elements
        name.textContent = `${member.name}`;
        p1.textContent = `${member.address}`;
        p2.textContent = `${member.phone}`;
        p3.innerHTML = `<a href=${member.website}>${member.website}</a>`;
        p4.textContent = `${member.membershipLevel} Member`;
        p5.textContent = `${member.joinedYear}`;

        //set any attributes to elements
        logo.setAttribute("src", member.logo);
        // logo.setAttribute("src", "images/directory/1business.webp");
        logo.setAttribute("alt", `logo of ${member.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "340");
        logo.setAttribute("height", "440");

        //append chiled elements to the new parent element (card contents)
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);

        card.classList.add("directory")
        //now, attach the new parent to the existing parent element in the html document
        cards.append(card)
    });
}

getBusinessData();

// Grid vs List
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});