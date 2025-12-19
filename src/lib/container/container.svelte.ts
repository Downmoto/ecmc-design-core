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
	
	/**
	 * Container variant/style
	 */
	variant?: 'default' | 'bordered' | 'elevated' | 'outlined';
	
	/**
	 * Container size
	 */
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
	
	/**
	 * Container padding
	 */
	padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	
	/**
	 * Whether the container should be fluid (full width)
	 */
	fluid?: boolean;
}

/**
 * Default props for the container component
 */
export const defaultProps: Partial<ContainerProps> = {
	variant: 'default',
	size: 'md',
	padding: 'md',
	fluid: false
};

/**
 * CSS class mappings for container variants
 */
export const containerVariantClasses = {
	default: 'container--default',
	bordered: 'container--bordered',
	elevated: 'container--elevated',
	outlined: 'container--outlined'
} as const;

/**
 * CSS class mappings for container sizes
 */
export const containerSizeClasses = {
	sm: 'container--sm',
	md: 'container--md',
	lg: 'container--lg',
	xl: 'container--xl',
	full: 'container--full'
} as const;

/**
 * CSS class mappings for container padding
 */
export const containerPaddingClasses = {
	none: 'container--padding-none',
	sm: 'container--padding-sm',
	md: 'container--padding-md',
	lg: 'container--padding-lg',
	xl: 'container--padding-xl'
} as const;