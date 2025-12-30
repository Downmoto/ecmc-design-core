import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Props for the Text component
 *
 * Provides typography with various size variants, alignment, and styling options.
 *
 * @example
 * ```svelte
 * <Text variant="headline" align="center">
 *   Welcome to our app
 * </Text>
 *
 * <Text italic>
 *   This is some italic body text
 * </Text>
 * ```
 */
export interface TextProps extends HTMLAttributes<HTMLElement> {
	/**
	 * The content to be rendered inside the text
	 */
	children?: Snippet;

	/**
	 * Text variant that determines the size and weight styling
	 * - `headline`: Large heading text (3rem/48px) - var(--font-size-4)
	 * - `subtitle`: Medium heading text (2.5rem/40px) - var(--font-size-3)
	 * - `body`: Standard body text (1rem/16px) - var(--font-size-1)
	 * - `bodyPlus`: Larger body text (1.2rem/19.2px) - var(--font-size-2)
	 *
	 * @default 'body'
	 */
	variant?: 'headline' | 'subtitle' | 'body' | 'bodyPlus' | 'half';

	/**
	 * Whether the text should be rendered in italic style
	 *
	 * @default false
	 */
	italic?: boolean;

	/**
	 * Whether the text should display inline (span) or block-level (div)
	 * - `false`: Renders as block-level `<div>`
	 * - `true`: Renders as inline `<span>`
	 *
	 * @default false
	 */
	inline?: boolean;

	/**
	 * Horizontal text alignment
	 * - `left`: Align text to the left
	 * - `center`: Center text
	 * - `right`: Align text to the right
	 *
	 * @default 'left'
	 */
	align?: 'right' | 'center' | 'left';
}
