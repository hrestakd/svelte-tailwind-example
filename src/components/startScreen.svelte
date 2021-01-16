<script lang="ts">
    import { afterUpdate, beforeUpdate, onMount, createEventDispatcher } from "svelte";
    import Playground from "./playground.svelte";
    import { gameInitialized, gameRunning } from '../stores';
    import { typewriter } from '../utilities/helperFunctions';
    
    export let name: string = '';
    let pText = 'Welcome to';
    let visible: boolean = false;

    const dispatch = createEventDispatcher();

    onMount(() => {
        pText += ' ' + name + ' playground!';
        if (!$gameInitialized) {
            setTimeout(() => {
                visible = true;
                gameInitialized.update(() => true);
            }, 2000);
            
        } else {
            visible = true;
        }
    });

    function onStartGame() {
        gameRunning.update(() => true);
    }

    function onShowSettings() {
        dispatch('showSettings', true);
    }

    function onExitGame() {
        gameRunning.update(() => false);
    }
    // new game da animira pacmana kak odlazi
</script>

{#if visible}
    {#if $gameRunning}
        <Playground on:exitGame={onExitGame}></Playground>
    {:else}
        <div class="flex flex-row">
            <div class="flex flex-col items-center space-y-4">
                <h1 class="font-mono text-3xl">
                    <p in:typewriter>{pText}</p>
                </h1>
                <button class="rounded-lg w-44 bg-yellow-400 border-2 border-gray-600" on:click={onStartGame}>New Game</button>
                <button class="rounded-lg w-44 bg-yellow-400 border-2 border-gray-600" on:click={onShowSettings}>User Settings</button>
            </div>
        </div>
    {/if}
{/if}
