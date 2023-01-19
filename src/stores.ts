import { writable, derived } from 'svelte/store';
import generatePassword from 'src/lib/generatePassword';

export const options = writable({
	length: 12,
	hasLowercaseCharacters: true,
	hasUppercaseCharacters: true,
	hasNumbers: true,
	hasSymbols: true,
	minimumAmountOfNumbers: 4,
	minimumAmountOfSymbols: 4
});

export const password = derived(options, ($options) => generatePassword($options));
