/* Countdown Timer

const birthday = '28 August 2021';
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

function countdown () {
	const birthdayDate = new Date(birthday);
	const currentDate = new Date();
	const totalSeconds = new Date((birthdayDate - currentDate) / 1000);

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor((totalSeconds / 60)  % 60);
	const seconds = Math.floor(totalSeconds % 60);
	console.log(days, hours, minutes, seconds);

	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours;
	minutesEl.innerHTML = minutes;
	secondsEl.innerHTML = seconds;
	
}
// initial call

countdown();
setInterval(countdown, 1000);
*/

//  Countdown with 0 display

const birthday = '28 August 2021';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
	const birthdayDate = new Date(birthday);
	const currentDate = new Date();
	const totalSeconds = Math.floor((birthdayDate - currentDate) / 1000);
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor((totalSeconds / 3600) % 24);
	const minutes = Math.floor((totalSeconds / 60) % 60);
	const seconds = Math.floor(totalSeconds % 60);

	daysEl.innerHTML = days;
	hoursEl.innerHTML = timeFormat(hours);
	minutesEl.innerHTML = timeFormat(minutes);
	secondsEl.innerHTML = timeFormat(seconds);
}

function timeFormat(time) {
	return time < 10 ? (`0${time}`) : time;
	
}
	countdown();
	setInterval(timeFormat, 1000);





