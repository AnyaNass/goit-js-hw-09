
const refs = {
	start: document.querySelector("[data-start]"),
	stop: document.querySelector("[data-stop]"),
	body: document.querySelector('body'),
}
let timeId = null;

refs.start.addEventListener("click", onClickChangeBgd);
refs.stop.addEventListener("click", onClickStopChangeBgd);

function onClickChangeBgd() {
	refs.start.setAttribute("disabled", true)
	refs.stop.removeAttribute("disabled");
	timeId = setInterval(() => {
		refs.body.style.backgroundColor = getRandomHexColor();
	}, 1000)
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStopChangeBgd() {
	refs.stop.setAttribute("disabled", true)
	clearInterval(timeId);
	refs.start.removeAttribute("disabled");
}