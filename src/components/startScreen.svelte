<script lang="ts">
    import { afterUpdate, beforeUpdate, onMount, createEventDispatcher } from "svelte";
    import Playground from "./playground.svelte";
    import { gameInitialized, gameRunning } from '../stores';

    
    export let name: string = '';
    let pText = 'Welcome to';
    let visible: boolean = false;

    const dispatch = createEventDispatcher();

    function typewriter(node: any, { speed = 25 }: any) {
        const valid = (
            node.childNodes.length === 1 &&
            node.childNodes[0].nodeType === Node.TEXT_NODE
        );

        if (!valid) {
            throw new Error(`This transition only works on elements with a single text node child`);
        }

        const text = node.textContent;
        const duration = text.length * speed;

        return {
            duration,
            tick: (t: number) => {
                const i = ~~(text.length * t);
                node.textContent = text.slice(0, i);
            }
        };
    }

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

</script>

{#if visible}
    <div class="flex flex-row">
        {#if $gameRunning}
            <Playground on:exitGame={onExitGame}></Playground>
        {:else}
            <div class="flex flex-col items-center space-y-4">
                <div class="self-center p-4">
                    <img src="resources/pacman.svg" class="h-4 sm:h-8" alt="pacman"/>
                </div>
                <h1 class="font-mono text-3xl">
                    <p in:typewriter>{pText}</p>
                </h1>
                <button class="rounded-lg w-44 bg-yellow-400 border-2 border-gray-600" on:click={onStartGame}>New Game</button>
                <button class="rounded-lg w-44 bg-yellow-400 border-2 border-gray-600" on:click={onShowSettings}>User Settings</button>
            </div>
        {/if}
    </div>
{/if}
