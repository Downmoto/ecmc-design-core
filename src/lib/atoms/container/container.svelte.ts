import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Container metrics interface for tracking div element properties
 */
export interface ContainerMetrics {
	/**
	 * Element dimensions
	 */
	width: number;
	height: number;

	/**
	 * Element position relative to viewport
	 */
	top: number;
	left: number;

	/**
	 * Element position relative to positioned parent
	 */
	offsetTop: number;
	offsetLeft: number;

	/**
	 * Scroll dimensions and position
	 */
	scrollWidth: number;
	scrollHeight: number;
	scrollTop: number;
	scrollLeft: number;

	/**
	 * Client dimensions (excluding scrollbar)
	 */
	clientWidth: number;
	clientHeight: number;
}

/**
 * Container component props interface
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The content to be rendered inside the container
	 */
	children?: Snippet;

	/**
	 * Opinionated padding options using y = x + 8 formula up to 64px
	 * xsm = 8px, sm = 16px, md = 24px, lg = 32px, xl = 64px
	 */
	padding?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl';

	/**
	 * Optional bound prop to track container element metrics
	 * Use bind:metrics={yourVariable} to access container dimensions and position
	 */
	metrics?: ContainerMetrics | undefined;
}

/**
 * Default props for the container atom
 */
export const defaultProps: Partial<ContainerProps> = {
	padding: 'md'
};

/**
 * CSS class mappings for padding variants
 */
export const paddingClasses = {
	xsm: 'container--padding-xsm',
	sm: 'container--padding-sm',
	md: 'container--padding-md',
	lg: 'container--padding-lg',
	xl: 'container--padding-xl'
} as const;
