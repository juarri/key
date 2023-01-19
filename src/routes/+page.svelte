<script lang="ts">
	import Hero from 'src/components/Hero.svelte';
	import Password from 'src/components/Password.svelte';
	import Options from 'src/components/Options.svelte';
</script>

<svelte:head>
	<title>Key | Password Generator</title>
</svelte:head>

<Hero />

<main>
	<Password />

	<Options />
</main>

<style>
  main {
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 36rem;

    gap: 2rem;
    display: flex;
    flex-direction: column;
  }
</style>
