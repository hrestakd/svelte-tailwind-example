<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function onExitGame() {
        dispatch('exitGame', true);
    }

</script>

<div class="absolute bottom-0 items-center">
    <button class="rounded-lg w-44 bg-yellow-400 border-2 border-gray-600" on:click={onExitGame}>Exit Game</button>
</div>