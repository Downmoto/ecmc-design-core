import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Props for the Kbd component
 *
 * Represents keyboard keys or shortcuts with visual styling that resembles
 * physical keyboard keys. Useful for displaying keyboard shortcuts, hotkeys,
 * or keyboard-related instructions.
 *
 * @example
 * ```svelte
 * <Kbd>Ctrl</Kbd>
 *
 * <Kbd variant="dark">
 *   Enter
 * </Kbd>
 *
 * <Kbd size="large">
 *   ⌘
 * </Kbd>
 * ```
 */
export interface KbdProps extends HTMLAttributes<HTMLElement> {
	/**
	 * The content to be rendered inside the kbd element
	 */
	children?: Snippet;

	/**
	 * Size variant that determines the kbd's dimensions
	 * - `small`: Compact size for inline usage
	 * - `medium`: Standard size (default)
	 * - `large`: Larger size for emphasis
	 *
	 * @default 'small'
	 */
	size?: 'small' | 'medium' | 'large';
}
