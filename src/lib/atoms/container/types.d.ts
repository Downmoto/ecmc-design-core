import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface BoxProps extends ContainerProps {
	gap?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl';
	align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
	justify?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	wrap?: boolean;
}
export interface InternalBoxProps extends BoxProps {
	variant: 'horizontal' | 'vertical';
}

export interface CenteredProps extends ContainerProps {
	horizontal?: boolean;
	vertical?: boolean;
}

export interface GridBoxProps extends ContainerProps {
	columns?: number | string;
	gap?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl';
	autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
}

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
 * Container atom props interface
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
