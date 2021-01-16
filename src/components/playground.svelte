<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function onExitGame() {
        dispatch('exitGame', true);
    }

</script>

<div>
    <button class="rounded-lg w-44 bg-yellow-400 border-2 border-gray-600" on:click={onExitGame}>Exit Game</button>
</div>