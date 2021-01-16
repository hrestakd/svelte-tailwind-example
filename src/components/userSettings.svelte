<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { flip } from 'svelte/animate';

    const dispatch = createEventDispatcher();
    function onBackClick() {
        dispatch('showSettings', false);
    }
</script>

<div class="flex flex-row">
    <div class="flex flex-col items-center space-y-4">
        <h2 class="font-mono text-3xl">Settings</h2>
        <button class="rounded-lg w-44 bg-yellow-400 border-2 border-gray-600" on:click={onBackClick}>Back</button>
    </div>
</div>
