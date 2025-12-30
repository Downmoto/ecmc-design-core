import type { KbdProps } from './types.js';

export const defaultProps: Partial<KbdProps> = {
	size: 'small'
} as const;

export const kbdSizeClasses = {
	small: 'kbd--small',
	medium: 'kbd--medium',
	large: 'kbd--large'
} as const;
