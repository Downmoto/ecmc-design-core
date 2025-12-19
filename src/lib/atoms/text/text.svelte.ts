import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface TextProps extends HTMLAttributes<HTMLElement> {
	/**
	 * The content to be rendered inside the text
	 */
	children?: Snippet;
	
	/**
	 * Additional CSS classes to apply to the text
	 */
	class?: string;

	/**
	 * Text variant that determines the size and weight styling
	 * @default 'body'
	 */
	variant?: 'headline' | 'subtitle' | 'body' | 'bodyPlus';

	/**
	 * Whether the text should be rendered in italic style
	 * @default false
	 */
	italic?: boolean,

	/**
	 * Font weight for the text (overrides variant default weight)
	 * @default 300
	 */
	weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;

	/**
	 * Whether the text should display inline (span) or block-level (div)
	 */
	inline?: boolean;
}

/**
 * Default props for the text atom
 */
export const defaultProps: Partial<TextProps> = {
	variant: 'body',
	italic: false,
	weight: 300,
	inline: false
};

/**
 * CSS class mappings for text variants
 */
export const textVariantClasses = {
	headline: 'text--headline',
	subtitle: 'text--subtitle',
	body: 'text--body',
	bodyPlus: 'text--body-plus'
} as const;

export const textItalicClass = {
	'true': 'text--italic',
	'false': ''
} as const;

export const textWeightClasses = {
	100: 'text--100',
	200: 'text--200',
	300: 'text--300',
	400: 'text--400',
	500: 'text--500',
	600: 'text--600',
	700: 'text--700',
} as const;