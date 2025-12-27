/**
 * Props for the Input component
 *
 * A form input field with label support, multiple input types, and responsive label positioning.
 * Features automatic label repositioning on small screens and accessibility support.
 *
 * @example
 * ```svelte
 * <script>
 *   let email = $state('');
 * </script>
 *
 * <Input
 *   label="Email Address"
 *   type="email"
 *   bind:value={email}
 *   placeholder="Enter your email"
 *   id="email-input"
 * />
 * ```
 *
 * @example
 * ```svelte
 * <!-- Horizontal label layout (desktop only) -->
 * <Input
 *   label="Username"
 *   labelLeft={true}
 *   bind:value={username}
 *   id="username"
 * />
 * ```
 */
export interface InputProps {
	/**
	 * The type of input field to render
	 * - `text`: Standard text input (default)
	 * - `email`: Email input with validation
	 * - `password`: Password input with masked characters
	 *
	 * @default 'text'
	 */
	type?: 'text' | 'email' | 'password';

	/**
	 * Label text displayed above or beside the input field
	 * Also used for the `aria-label` accessibility attribute
	 *
	 * @default ''
	 */
	label?: string;

	/**
	 * Position the label to the left of the input (horizontal layout)
	 * - `false`: Label appears above input (vertical layout)
	 * - `true`: Label appears to the left (horizontal layout on desktop)
	 *
	 * Note: Automatically reverts to vertical layout on screens smaller than 640px
	 *
	 * @default false
	 */
	labelLeft?: boolean;

	/**
	 * Placeholder text shown when the input is empty
	 *
	 * @default ''
	 */
	placeholder?: string;

	/**
	 * The current value of the input field
	 * This prop is bindable using `bind:value`
	 *
	 * @example
	 * ```svelte
	 * let userInput = $state('');
	 * <Input bind:value={userInput} />
	 * ```
	 */
	value: string;

	/**
	 * The HTML id attribute for the input element
	 * Used to associate the label with the input for accessibility
	 *
	 * @example
	 * ```svelte
	 * <Input id="user-email" label="Email" />
	 * ```
	 */
	id?: string;
}
