<script>
	import { options } from 'src/stores';
</script>

<section>
	<h2>Options</h2>

	<div class="options">
		<div class="length">
			<div>Length {$options.length}/64</div>
			<div><input type="range" bind:value={$options.length} min={8} max={64} /></div>
		</div>

		<div>
			Lowercase Letters
			<input type="checkbox" bind:checked={$options.hasLowercaseCharacters} />
		</div>

		<div>
			Uppercase Letters
			<input type="checkbox" bind:checked={$options.hasUppercaseCharacters} />
		</div>

		<div>
			Numbers
			<input type="checkbox" bind:checked={$options.hasNumbers} />
		</div>

		<div>
			Symbols Letters
			<input type="checkbox" bind:checked={$options.hasSymbols} />
		</div>

		<div>
			<div>Minimum numbers {$options.minimumAmountOfNumbers}</div>
			<div>
				<input
					type="range"
					bind:value={$options.minimumAmountOfNumbers}
					min={0}
					max={$options.length / 2}
				/>
			</div>
		</div>

		<div>
			<div>Minimum symbols {$options.minimumAmountOfSymbols}</div>
			<div>
				<input
					type="range"
					bind:value={$options.minimumAmountOfSymbols}
					min={0}
					max={$options.length / 2}
				/>
			</div>
		</div>
	</div>
</section>

<style>
	h2 {
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	.options {
		gap: 1.5rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.length {
		grid-column: 1/-1;
	}

	/*********** Baseline, reset styles ***********/
	input[type='range'] {
		appearance: none;
    margin-top: 1rem;
		background: transparent;
		cursor: pointer;
		width: 100%;
	}

	/* Removes default focus */
	input[type='range']:focus {
		outline: none;
	}

	/******** Chrome, Safari, Opera and Edge Chromium styles ********/
	/* slider track */
	input[type='range']::-webkit-slider-runnable-track {
		background-color: #000000;
		border-radius: 0.5rem;
		height: 0.1rem;
	}

	/* slider thumb */
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		margin-top: -7.2px; /* Centers thumb on the track */
		background-color: #000000;
		border-radius: 0.5rem;
		height: 1rem;
		width: 1rem;
	}

	input[type='range']:focus::-webkit-slider-thumb {
		outline: 3px solid #000000;
		outline-offset: 0.125rem;
	}

	/*********** Firefox styles ***********/
	/* slider track */
	input[type='range']::-moz-range-track {
		background-color: #000000;
		border-radius: 0.5rem;
		height: 0.1rem;
	}

	/* slider thumb */
	input[type='range']::-moz-range-thumb {
		background-color: #000000;
		border: none; /*Removes extra border that FF applies*/
		border-radius: 0.5rem;
		height: 1rem;
		width: 1rem;
	}

	input[type='range']:focus::-moz-range-thumb {
		outline: 3px solid #000000;
		outline-offset: 0.125rem;
	}
</style>
