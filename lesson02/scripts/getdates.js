 /* const year = document.querySelector('#copyright');
        year.textContent = new Date().getFullYear(); This also works,
        but decided on less code in one line below
        is there a reason to do it with variables in this simple instance? */
document.querySelector('#copyright').textContent = new Date().getFullYear();

/* const month = new Date().getMonth() +1;
const day = new Date().getDate();
const year = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `${month}/${day}/${year}`; */

document.querySelector('#lastModified').textContent = new Date(document.lastModified);