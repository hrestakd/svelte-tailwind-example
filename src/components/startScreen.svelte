<script lang="ts">
import { afterUpdate, beforeUpdate, onMount } from "svelte";
import Playground from "./playground.svelte";
import UserControls from "./userControls.svelte";
import UserSettings from "./userSettings.svelte";


    export let name: string = '';
    let pText = 'Welcome to';
    let visible: boolean = false;
    let gameStarted: boolean = false;

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
        visible = true;
    })

</script>

{#if visible}
    <div class="md:flex container mx-auto px-4 border-gray-500 md:max-w-2xl">
        <h2 class="font-mono" in:typewriter>{pText}</h2>
        <UserControls></UserControls>
        <UserSettings></UserSettings>
        {#if gameStarted}
            <Playground></Playground>
        {/if}
    </div>
{/if}
