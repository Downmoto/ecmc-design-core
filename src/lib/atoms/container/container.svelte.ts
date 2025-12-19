import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Container component props interface
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The content to be rendered inside the container
	 */
	children?: Snippet;
	
	/**
	 * Additional CSS classes to apply to the container
	 */
	class?: string;
}

