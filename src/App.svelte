<script lang="typescript">
	import StartScreen from './components/startScreen.svelte';
	import UserSettings from './components/userSettings.svelte';
	import UserControls from "./components/userControls.svelte";
	import Playground from "./components/playground.svelte";
	import { flip } from 'svelte/animate';
	import { blur } from 'svelte/transition';
	import Tailwindcss from './Tailwindcss.svelte';
	import { gameRunning } from './stores';
import { beforeUpdate } from 'svelte';

	export let name: string;
	let showSettings: boolean = false;
	let startScreenInitialized: boolean = false;
	let gameMapCSS: string = "relative px-4 py-10 bg-gray-200 shadow-lg sm:rounded-3xl sm:p-20";
	
	function onShowSettings(event: { detail: boolean; }) {
		showSettings = event.detail;
	}

	function onExitGame() {
        gameRunning.update(() => false);
	}
	
	function onScreenInitialized(event: { detail: boolean; }) {
		startScreenInitialized = event.detail;
	}

	beforeUpdate(() => {
		if ($gameRunning) {
			gameMapCSS += " w-full h-full";
		}
		else {
			gameMapCSS = "relative px-4 py-10 bg-gray-200 shadow-lg sm:rounded-3xl sm:p-20";
		}
	});
	//TODO: ubacit loading screen vidljiv kod prvog pokretanja igre
	//        <div class="self-center">
	//<img src="resources/pacman.svg" class="transform rotate-180 h-36 w-28" alt="pacman"/>
    //</div>
</script>

<Tailwindcss />
<main>
	<div class="min-h-screen bg-gray-600 py-6 flex flex-col justify-center sm:py12">
		<div class="relative py-3 max-w-3xl mx-auto h-full">
			<div class="absolute bg-yellow-500 inset-0 bg-gradient-to-b from-cyan-800 to-light-blue-500 shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-12 sm:rounded-3xl"></div>
			<div class={gameMapCSS}>
				{#if $gameRunning}
					<Playground on:exitGame={onExitGame}></Playground>
				{:else}
					<div class="flex justify-center">
						<img src="resources/pacman.svg" class="h-36 w-28" alt="pacman"/>
					</div>
					{#if !showSettings}
						<StartScreen on:showSettings={onShowSettings} name={name} on:screenInitialized={onScreenInitialized}></StartScreen>
					{:else}
						<UserSettings on:showSettings={onShowSettings}></UserSettings>
					{/if}
				{/if} 
			</div>
		</div>
		{#if startScreenInitialized}
			<UserControls></UserControls>
		{/if}
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

	/*Chrome*/
	input[type='range'] {
	overflow: hidden;
	width: 80px;
	-webkit-appearance: none;
	background-color: #9a905d;
	}
	
	input[type='range']::-webkit-slider-runnable-track {
	height: 10px;
	-webkit-appearance: none;
	color: #13bba4;
	margin-top: -1px;
	}
	
	::-webkit-slider-thumb {
		width: 10px;
		-webkit-appearance: none;
		height: 10px;
		cursor: ew-resize;
		background: #434343;
		box-shadow: -80px 0 0 80px #43e5f7;
	}

	input[type='range']::-webkit-slider-thumb {
	width: 10px;
	-webkit-appearance: none;
	height: 10px;
	cursor: ew-resize;
	background: #434343;
	box-shadow: -80px 0 0 80px #43e5f7;
	}
	/** FF*/
	input[type="range"]::-moz-range-progress {
	background-color: #43e5f7; 
	}
	input[type="range"]::-moz-range-track {  
	background-color: #9a905d;
	}
</style>
