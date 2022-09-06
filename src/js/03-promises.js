import Notiflix from 'notiflix';

const refs = {
	form: document.querySelector('.form')
}

refs.form.addEventListener('submit', (e) => {
	e.preventDefault();

	const delay = Number(e.target.elements.delay.value)
	const step = Number(e.target.elements.step.value)
	const amount = Number(e.target.elements.amount.value)

	let nextSteps = delay;

	for (let i = 1; i <= amount; i += 1) {

		createPromise(i, nextSteps)
			.then(({ position, delay }) => {
				Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
			})
			.catch(({ position, delay }) => {
				Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`)
			});

		nextSteps += step;
	}
})

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve({ position, delay })
			} else {
				reject({ position, delay })
			}
		}, delay)
	})
}
