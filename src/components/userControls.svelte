<script lang="ts">
    import { fly } from 'svelte/transition';
    import { coords, size } from '../stores';
    // todo: animirat ovo da uleti na ekran s desna
</script>

<div transition:fly="{{ x: 200, duration: 1000}}" class="bg-yellow-500 rounded-lg shadow-lg fixed w-1/5 h-1/2 m-32 right-0">
    <h2 class="text-2xl m-4">Player controls</h2>
    <label>
        <h3>Stiffness ({coords.stiffness})</h3>
        <input bind:value={coords.stiffness} type="range" min="0" max="1" step="0.01">
    </label>
    <label>
        <h3>Damping ({coords.damping})</h3>
        <input bind:value={coords.damping} type="range" min="0" max="1" step="0.01">
    </label>
</div>
