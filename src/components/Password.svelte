<script>
  import toast from 'svelte-french-toast';

	import generatePassword, { numbers, symbols } from 'src/lib/generatePassword';
	import { password, options } from 'src/stores';

	const handleCopy = () => {
		navigator.clipboard.writeText($password);
		toast.success('Password copied', {
      position: 'bottom-center',
    });
	};

	const handleGenerate = () => {
		$options.length =  $options.length
	};
</script>

<section>
	<h2>Password</h2>

	<button
		class="password"
		on:click={handleCopy}
		style:font-size={$password.length <= 16
			? '1.75rem'
			: $password.length <= 24
			? '1.5rem'
			: '1.25rem'}
	>
		{#each $password as character}
			{@const isNumber = numbers.includes(character)}
			{@const isSymbol = symbols.includes(character)}

			<span class:number={isNumber} class:symbol={isSymbol}>{character}</span>
		{/each}
	</button>

	<div class="buttons">
		<button class="copy" on:click={handleCopy}>Copy</button>
		<button class="generate" on:click={handleGenerate}>Generate</button>
	</div>
</section>

<style>
	h2 {
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	.password {
		border: 1px solid #000;
		margin-bottom: 1rem;
		padding: 2rem 1.5rem;
		width: 100%;

		font-size: 1.25rem;
		letter-spacing: 0.1rem;
		line-height: 1.5;
		word-break: break-all;
	}

	.number {
		color: #c280d2;
	}

	.symbol {
		color: #ff8045;
	}

	.buttons {
		gap: 1rem;
		display: flex;
	}

	.buttons button {
		width: 100%;
		border: 1px solid #000;
		padding: 1.25rem 2rem;

		font-size: 1.2rem;
	}
</style>
