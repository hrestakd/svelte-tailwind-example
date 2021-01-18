<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { coords, size } from '../stores';
    const dispatch = createEventDispatcher();
    function onExitGame() {
        dispatch('exitGame', true);
    }

</script>

<div class="flex justify center absolute bottom-0 items-center p-4">
    <button class="rounded-lg w-44 bg-yellow-400 border-2 border-gray-600" on:click={onExitGame}>Exit Game</button>
</div>
<svg
    on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
    on:mousedown="{() => size.set(30)}"
    on:mouseup="{() => size.set(10)}">
        <circle cx={$coords.x} cy={$coords.y} r={$size}/>
</svg>

<style>
	svg { width: 100%; height: 100%; margin: -8px; }
	circle { fill: #ff3e00 }
</style>