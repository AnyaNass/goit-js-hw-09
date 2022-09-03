import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

flatpickr("#datetime-picker", {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		console.log(selectedDates[0]);
	},
});

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

	refs.days.textContent = addLeadingZero(convertMs(timeBack).days);
	refs.hours.textContent = addLeadingZero(convertMs(timeBack).hours);
	refs.minutes.textContent = addLeadingZero(convertMs(timeBack).minutes);
	refs.seconds.textContent = addLeadingZero(convertMs(timeBack).seconds);
}

function convertMs(ms) {
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;


	const days = Math.floor(ms / day);
	const hours = Math.floor((ms % day) / hour);
	const minutes = Math.floor(((ms % day) % hour) / minute);
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
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


function addLeadingZero(value) {
	return String(value).padStart(2, '0');
}








