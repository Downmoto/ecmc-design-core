import type { Snippet } from 'svelte';

/**
 * Props for the Button component
 *
 * @example
 * ```svelte
 * <Button variant="primary" onclick={handleClick}>
 *   Click Me
 * </Button>
 * ```
 */
export interface ButtonProps {
	/**
	 * The content to be rendered inside the button
	 */
	children?: Snippet;

	/**
	 * Visual variant that determines the button's appearance
	 * - `primary`: Main action button with prominent styling
	 * - `secondary`: Alternative action with less emphasis
	 * - `disabled`: Non-interactive state
	 *
	 * @default 'primary'
	 */
	variant?: 'primary' | 'secondary' | 'disabled';

	/**
	 * Click handler for button interactions
	 *
	 * @param event - The native mouse click event
	 */
	onclick?: (event: MouseEvent) => void;
}
