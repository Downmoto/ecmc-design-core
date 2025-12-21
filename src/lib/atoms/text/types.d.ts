import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface TextProps extends HTMLAttributes<HTMLElement> {
	/**
	 * The content to be rendered inside the text
	 */
	children?: Snippet;

	/**
	 * Text variant that determines the size and weight styling
	 * @default 'body'
	 */
	variant?: 'headline' | 'subtitle' | 'body' | 'bodyPlus';

	/**
	 * Whether the text should be rendered in italic style
	 * @default false
	 */
	italic?: boolean;

	/**
	 * Font weight for the text (overrides variant default weight)
	 * @default 300
	 */
	weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;

	/**
	 * Whether the text should display inline (span) or block-level (div)
	 * @default false
	 */
	inline?: boolean;

	align?: 'right' | 'center' | 'left';
}
