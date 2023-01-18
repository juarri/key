<script lang="ts">
	import generatePassword from '../scripts/generatePassword';

	let length = 12;

	let hasLowercaseCharacters = true;
	let hasUppercaseCharacters = true;
	let hasNumbers = true;
	let hasSymbols = true;

	let minimumAmountOfNumbers = 0;
	let minimumAmountOfSymbols = 0;

	$: generatePasswordParameters = {
		length,
		hasLowercaseCharacters,
		hasUppercaseCharacters,
		hasNumbers,
		hasSymbols,
		minimumAmountOfNumbers,
		minimumAmountOfSymbols
	};

	$: currentPassword = generatePassword(generatePasswordParameters);

	const handleGenerate = () => {
		currentPassword = generatePassword(generatePasswordParameters);
	};
</script>

<h1>Key</h1>
<p>Password generator</p>

<p>{currentPassword}</p>
<button on:click={handleGenerate}>Generate</button>

<h2>Options</h2>

<div>
	<div>Length {length}</div>
	<div><input type="range" bind:value={length} min={8} max={128} /></div>
</div>

<div>
	<div>Lowercase Letters</div>
	<div><input type="checkbox" bind:checked={hasLowercaseCharacters} /></div>
</div>

<div>
	<div>Uppercase Letters</div>
	<div><input type="checkbox" bind:checked={hasUppercaseCharacters} /></div>
</div>

<div>
	<div>Numbers</div>
	<div><input type="checkbox" bind:checked={hasNumbers} /></div>
</div>

<div>
	<div>Symbols Letters</div>
	<div><input type="checkbox" bind:checked={hasSymbols} /></div>
</div>

<div>
	<div>Minimum numbers {minimumAmountOfNumbers}</div>
	<div><input type="range" bind:value={minimumAmountOfNumbers} min={0} max={length / 2} /></div>
</div>

<div>
	<div>Minimum symbols {minimumAmountOfSymbols}</div>
	<div><input type="range" bind:value={minimumAmountOfSymbols} min={0} max={length / 2} /></div>
</div>
