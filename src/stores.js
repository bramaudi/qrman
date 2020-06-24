import { writable } from 'svelte/store'

export let theme = writable('light')
export let result = writable('')