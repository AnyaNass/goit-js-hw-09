const refs = {
	date: document.querySelector('#datetime-picker'),
	days: document.querySelector('[data-days]'),
	hours: document.querySelector('[data-hours]'),
	minutes: document.querySelector('[data-minutes]'),
	seconds: document.querySelector('[data-seconds]'),
	start: document.querySelector('[data-start]'),
	tooltip: document.querySelector('.tooltip')
}

let timeId = null;

function timer() {
	const timeBack = new Date(refs.date.value) - new Date();

	console.log(timeBack);
	refs.days.textContent = pad(Math.floor(timeBack / (1000 * 60 * 60 * 24) % 30))
	refs.hours.textContent = pad(Math.floor((timeBack / (1000 * 60 * 60)) % 24))
	refs.minutes.textContent = pad(Math.floor((timeBack / (1000 * 60)) % 60))
	refs.seconds.textContent = pad(Math.floor((timeBack / 1000) % 60))
}

refs.date.addEventListener("change", () => {
	if (new Date(refs.date.value) < new Date || refs.date.value == "") {
		refs.start.setAttribute("disabled", true);
		refs.days.textContent = "00"
		refs.hours.textContent = "00"
		refs.minutes.textContent = "00"
		refs.seconds.textContent = "00"
		refs.tooltip.classList.remove('hidden')
	}
	if (refs.date.value == "") {
		refs.tooltip.classList.add('hidden')
	}
	if (new Date(refs.date.value) > new Date) {
		refs.start.removeAttribute("disabled")
	}
	clearInterval(timeId);
})

refs.start.addEventListener('click', () => {
	if (new Date(refs.date.value) < new Date || refs.date.value == "") {
		refs.start.setAttribute("disabled", true);
		return
	}
	refs.start.setAttribute("disabled", true);
	refs.tooltip.classList.add('hidden')
	timeId = setInterval(timer, 1000);
});


function pad(value) {
	return String(value).padStart(2, '0');
}








