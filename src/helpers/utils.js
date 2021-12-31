import { ENV } from '../variables';

export function getRandomString(length) {
	if (!length) {
		length = 12;
	}
	const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	const result = [];
	for (let i = 0; i < length; i++) {
		result.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
	}
	return result.join('');
}

export function getTracker() {
	let tracker = localStorage.getItem('duid');
	if (!tracker) {
		tracker = getRandomString(16);
		localStorage.setItem('duid', tracker);
	}
	return tracker;
}

export async function discordify(msg) {
	msg = msg.trim();
	if (!ENV.isProduction) {
		console.log('mocking discordify ', getTracker(), msg);
		return;
	}
	await fetch(ENV.discordHook, {
		method: 'POST',
		body: JSON.stringify({
			content: `${msg} \`${getTracker()}\` - ${window.location.href}`
		})
	});
}
