import type { ContainerProps } from './types.js';

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
