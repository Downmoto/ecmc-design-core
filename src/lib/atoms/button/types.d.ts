import type { Snippet } from 'svelte';

export interface ButtonProps {
	children?: Snippet;

	variant?: 'primary' | 'secondary' | 'disabled';

	onclick?: (event: MouseEvent) => void;
}
