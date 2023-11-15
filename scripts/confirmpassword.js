const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");
const message = document.querySelector(".formmessage");

confirmpassword.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (password.value !== confirmpassword.value) {
		message.textContent = "❗Passwords DO NOT MATCH! Please try again,";
		message.style.visibility = "show";
        message.style.borderLeft = red;
		confirmpassword.value = "";
		confirmpassword.focus();
	} else {
		message.style.display = "none";
		confirmpassword.style.backgroundColor = "#fff";
		confirmpassword.style.color = "#000";
	}
}
