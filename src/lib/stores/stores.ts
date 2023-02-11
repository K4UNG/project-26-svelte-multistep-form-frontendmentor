import { writable } from 'svelte/store';

export const userStore = writable({
	name: '',
	email: '',
	ph: ''
});

export const planStore = writable({
	monthly: true,
	active: 0
});
