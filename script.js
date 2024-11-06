// const clickButton = document.querySelector("button");

// clickButton.addEventListener("click", function handleClick() {
// 	alert("Button was clicked!");
// });

// clickButton.addEventListener("click", () => alert("Button was Clicked!"));

const messageButton = document.getElementById("messageButton");
messageButton.addEventListener("click", () => alert("Button clicked!"));

setTimeout(() => {
	const button = document.getElementById("myButton");
	button.textContent = "Now you have learnt DOM";
}, 5000);
