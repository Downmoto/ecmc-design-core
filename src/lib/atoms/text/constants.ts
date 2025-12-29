import type { TextProps } from './types.js';

/**
 * Default props for the text atom
 */
export const defaultProps: Partial<TextProps> = {
	variant: 'body',
	italic: false,
	inline: false,
	align: 'left'
} as const;

/**
 * CSS class mappings for text variants
 */
export const textVariantClasses = {
	headline: 'text--headline',
	subtitle: 'text--subtitle',
	body: 'text--body',
	bodyPlus: 'text--body-plus',
	half: 'text--half'
} as const;

/**
 * CSS class mappings for text alignment
 */
export const textAlignClasses = {
	center: 'text--align-center',
	right: 'text--align-right',
	left: ''
} as const;
