import type { TextProps } from './types.js';

/**
 * Default props for the text atom
 */
export const defaultProps: Partial<TextProps> = {
	variant: 'body',
	italic: false,
	weight: 300,
	inline: false
} as const;

/**
 * CSS class mappings for text variants
 */
export const textVariantClasses = {
	headline: 'text--headline',
	subtitle: 'text--subtitle',
	body: 'text--body',
	bodyPlus: 'text--body-plus'
} as const;
