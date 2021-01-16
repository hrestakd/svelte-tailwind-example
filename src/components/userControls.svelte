<script lang="ts">
    import { fly } from 'svelte/transition';
    // todo: animirat ovo da uleti na ekran s desna
</script>

<div in:fly="{{ y: 200, duration: 2000}}" class="bg-yellow-500 rounded-lg fixed w-1/5 h-1/2 m-32 right-0">
    <h2 class="text-2xl m-4">Player controls</h2>
</div>
