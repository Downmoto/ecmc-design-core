import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The content to be rendered inside the text
	 */
	children?: Snippet;
	
	/**
	 * Additional CSS classes to apply to the text
	 */
	class?: string;
}
