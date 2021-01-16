<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function onBackClick() {
        dispatch('showSettings', false);
    }
</script>

<div class="flex flex-row">
    <div class="flex flex-col items-center space-y-4">
        <div class="self-center p-4">
            <img src="resources/pacman.svg" class="h-4 sm:h-8" alt="pacman"/>
        </div>
        <h2 class="font-mono text-3xl">User Settings</h2>
        <button class="rounded-lg w-44 bg-yellow-400" on:click={onBackClick}>Back</button>
    </div>
</div>
