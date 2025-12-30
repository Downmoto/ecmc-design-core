import type { Snippet } from 'svelte';

export interface ItemProps {
	text: string;
	subtitle?: string;
	action?: Snippet;
}
