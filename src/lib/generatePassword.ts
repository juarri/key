const shuffleString = (word: string) => {
	const a = word.split('');
	const n = word.length;

	for (var i = n - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;
	}

	return a.join('');
};

const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
export const lowercaseCharacters = characterCodes.map((code) => String.fromCharCode(code));
export const uppercaseCharacters = lowercaseCharacters.map((letter) => letter.toUpperCase());

export const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

type generatePasswordParameters = {
	length?: number;
	hasLowercaseCharacters?: boolean;
	hasUppercaseCharacters?: boolean;
	hasNumbers?: boolean;
	hasSymbols?: boolean;
	minimumAmountOfNumbers?: number;
	minimumAmountOfSymbols?: number;
};

const generatePassword = ({
	length = 12,
	hasLowercaseCharacters = true,
	hasUppercaseCharacters = true,
	hasNumbers = true,
	hasSymbols = false,
	minimumAmountOfNumbers = 0,
	minimumAmountOfSymbols = 0
}: generatePasswordParameters) => {
	let availableCharacters = [
		...(hasLowercaseCharacters ? lowercaseCharacters : []),
		...(hasUppercaseCharacters ? uppercaseCharacters : []),
		...(hasNumbers ? numbers : []),
		...(hasSymbols ? symbols : [])
	];

	let password = '';

	if (availableCharacters.length === 0) return '';

	if (length < minimumAmountOfNumbers + minimumAmountOfSymbols) return '';

	if (hasNumbers) {
		for (let i = 0; i < minimumAmountOfNumbers; i++) {
			const randomIndex = Math.floor(Math.random() * numbers.length);
			password += numbers[randomIndex];
		}

		length -= minimumAmountOfNumbers;
	}

	if (hasSymbols) {
		for (let i = 0; i < minimumAmountOfSymbols; i++) {
			const randomIndex = Math.floor(Math.random() * symbols.length);
			password += symbols[randomIndex];
		}

		length -= minimumAmountOfSymbols;
	}

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * availableCharacters.length);
		password += availableCharacters[randomIndex];
	}

	const shuffledPassword = shuffleString(password);

	return shuffledPassword;
};

export default generatePassword;
