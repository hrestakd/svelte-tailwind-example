import { writable, readable, derived } from 'svelte/store';
import { spring } from 'svelte/motion';

export const gameInitialized = writable(false);
export const gameRunning = writable(false);
export const coords = spring({ x: 50, y: 50 }, {
    stiffness: 0.5,
    damping: 0.5
});
export const size = spring(10);

// ime (unos na start screenu)
// ime+score mapa
