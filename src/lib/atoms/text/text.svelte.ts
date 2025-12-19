import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The content to be rendered inside the text
	 */
	children?: Snippet;
	
	/**
	 * Additional CSS classes to apply to the text
	 */
	class?: string;

	variant?: 'headline' | 'subtitle' | 'body' | 'bodyPlus';
}

/**
 * Default props for the text atom
 */
export const defaultProps: Partial<TextProps> = {
	variant: 'body',
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