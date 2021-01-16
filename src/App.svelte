<script lang="typescript">
	import StartScreen from './components/startScreen.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	export let name: string;
</script>

<Tailwindcss />
<main>
	<div class="min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py12">
		<div class="relative py-3 sm:max-w-xl sm:mx-auto">
			<div class="absolute inset-0 bg-gradient-to-b from-cyan-800 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
			<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
				<StartScreen name={name}></StartScreen>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
