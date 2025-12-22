import type { ButtonProps } from './types.js';

export const defaultProps: Partial<ButtonProps> = {
	variant: 'primary'
} as const;

export const buttonVariantClasses = {
	primary: 'button--primary',
	secondary: 'button--secondary',
	disabled: 'button--disabled'
} as const;
