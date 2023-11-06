const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		/* h2s.forEach(element => {
			element.style.color = "#000";
            element.style.backgroundColor = "#fff";
		}); */
		modeButton.style.fontSize = "2rem"
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
	/* 	h2s.forEach(element => {
			element.style.color = "#fff";
            element.style.backgroundColor = "000";
		}); */
		modeButton.style.fontSize = "2rem"
		modeButton.textContent = "🕶️";
	}
});