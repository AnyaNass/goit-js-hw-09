import Notiflix from 'notiflix';

const refs = {
	form: document.querySelector('.form')
}

refs.form.addEventListener('submit', (e) => {
	e.preventDefault();

	const { delay, step, amount } = e.target.elements;

	let nextSteps = Number(delay.value);

	for (let i = 1; i <= Number(amount.value); i += 1) {

		createPromise(i, nextSteps)
			.then(({ position, delay }) => {
				Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
			})
			.catch(({ position, delay }) => {
				Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`)
			});

		nextSteps += Number(step.value);
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
