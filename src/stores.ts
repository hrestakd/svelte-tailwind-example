import { writable, readable, derived } from 'svelte/store';

export const gameInitialized = writable(false);
export const gameRunning = writable(false);
// ime (unos na start screenu)
// ime+score mapa
