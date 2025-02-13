import { type Writable, writable } from 'svelte/store';
import { browser } from '$app/environment';

export const consent: Writable<boolean> = writable(checkLocalStorage());

function checkLocalStorage(): boolean {
	try {
		if (browser) {
			const item = localStorage.getItem('consent');
			return item === 'true';
		}
		console.error('No browser detected');
		return false;
	} catch (error) {
		console.error('Error checking localStorage:', error);
		return false;
	}
}

function setConsent(value: boolean): void {
	consent.set(value);
	if (browser) {
		try {
			localStorage.setItem('consent', value.toString());
		} catch (error) {
			console.error('Error setting consent:', error);
		}
	} else {
		console.error('No browser detected');
	}
}

export { setConsent };
