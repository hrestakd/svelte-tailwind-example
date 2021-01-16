<script lang="typescript">
	import StartScreen from './components/startScreen.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	export let name: string;
</script>

<Tailwindcss />
<main>
	<StartScreen name={name}></StartScreen>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
