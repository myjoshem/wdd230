const pageVisits = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	pageVisits.textContent = numVisits;
} else {
	pageVisits.textContent = `This is your first visit. 🤗 Lucky you!`;
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);