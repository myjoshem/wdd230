document.querySelector('#copyright').textContent = new Date().getFullYear();

/* const month = new Date().getMonth() +1;
const day = new Date().getDate();
const year = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `${month}/${day}/${year}`; */

const options = {
        weekday: "Long",
        month: "numeric",
  day: "2-digit",		
        year: "numeric"
};

document.querySelector('#lastModified').textContent = new Date().toDateString();