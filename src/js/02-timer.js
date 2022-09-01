const refs = {
	date: document.querySelector('#datetime-picker'),
	days: document.querySelector('[data-days]'),
	hours: document.querySelector('[data-hours]'),
	minutes: document.querySelector('[data-minutes]'),
	seconds: document.querySelector('[data-seconds]'),
	start: document.querySelector('[data-start]'),
}
const DATE = new Date();

// console.log(DATE);
console.log(new Date(refs.date.value));

let timeId = null;

function timer() {
	const DATE = new Date();
	const timeBack = new Date(refs.date.value) - DATE;
	console.log(timeBack);

	refs.days.textContent = Math.floor(timeBack / (1000 * 60 * 60 * 24) % 30)
	refs.hours.textContent = Math.floor((timeBack / (1000 * 60 * 60)) % 24)
	refs.minutes.textContent = Math.floor((timeBack / (1000 * 60)) % 60)
	refs.seconds.textContent = Math.floor((timeBack / 1000) % 60)
}

// refs.start.addEventListener('click', () => {
// 	timeId = setInterval(timer, 1000);
// })
timeId = setInterval(timer, 1000);


// const years = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12));
// const months = Math.floor(t / (1000 * 60 * 60 * 24 * 30) % 12);
// const days = Math.floor(timeBack / (1000 * 60 * 60 * 24) % 30);
// const hours = Math.floor((timeBack / (1000 * 60 * 60)) % 24);
// const minutes = Math.floor((timeBack / (1000 * 60)) % 60);
// const seconds = Math.floor((timeBack / 1000) % 60);







