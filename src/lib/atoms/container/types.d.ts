import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Props for the Box container component (HBox and VBox variants)
 *
 * Provides flexbox layout capabilities with customizable spacing, alignment, and wrapping.
 *
 * @example
 * ```svelte
 * <HBox gap="md" align="center" justify="space-between">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </HBox>
 * ```
 */
export interface BoxProps extends ContainerProps {
	/**
	 * Gap spacing between flex items (maps to CSS --spacing-* variables)
	 * - `none`: 0 - No gap
	 * - `xsm`: 0.5rem (8px) - var(--spacing-xsm)
	 * - `sm`: 1rem (16px) - var(--spacing-sm)
	 * - `md`: 1.5rem (24px) - var(--spacing-md)
	 * - `lg`: 2rem (32px) - var(--spacing-lg)
	 * - `xl`: 3rem (48px) - var(--spacing-xl)
	 */
	gap?: 'none' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl';

	/**
	 * Cross-axis alignment of flex items
	 * - `flex-start`: Align items to the start
	 * - `center`: Center items
	 * - `flex-end`: Align items to the end
	 * - `stretch`: Stretch items to fill container
	 * - `baseline`: Align items along their baselines
	 *
	 * @default 'flex-start'
	 */
	align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

	/**
	 * Main-axis justification of flex items
	 * - `flex-start`: Pack items at the start
	 * - `center`: Center items
	 * - `flex-end`: Pack items at the end
	 * - `space-between`: Distribute with space between
	 * - `space-around`: Distribute with space around
	 * - `space-evenly`: Distribute with even spacing
	 *
	 * @default 'flex-start'
	 */
	justify?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';

	/**
	 * Whether flex items should wrap to multiple lines
	 *
	 * @default false
	 */
	wrap?: boolean;
}

/**
 * Internal props for Box components with direction variant
 *
 * @internal
 */
export interface InternalBoxProps extends BoxProps {
	/**
	 * Flex direction of the container
	 * - `horizontal`: Row layout (HBox)
	 * - `vertical`: Column layout (VBox)
	 */
	variant: 'horizontal' | 'vertical';
}

/**
 * Props for the Centered container component
 *
 * Centers content horizontally and/or vertically using flexbox.
 *
 * @example
 * ```svelte
 * <Centered horizontal vertical>
 *   <div>Perfectly centered content</div>
 * </Centered>
 * ```
 */
export interface CenteredProps extends ContainerProps {
	/**
	 * Whether to center content horizontally
	 *
	 * @default true
	 */
	horizontal?: boolean;

	/**
	 * Whether to center content vertically
	 *
	 * @default true
	 */
	vertical?: boolean;
}

/**
 * Props for the GridBox container component
 *
 * Provides CSS Grid layout capabilities with customizable columns and spacing.
 *
 * @example
 * ```svelte
 * <GridBox columns={3} gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </GridBox>
 * ```
 */
export interface GridBoxProps extends ContainerProps {
	/**
	 * Number of columns or custom grid-template-columns value
	 * - Number: Creates equal-width columns (e.g., 3 → `repeat(3, 1fr)`)
	 * - String: Custom CSS value (e.g., "200px 1fr 2fr")
	 *
	 * @default 2
	 */
	columns?: number | string;

	/**
	 * Gap spacing between grid items (maps to CSS --spacing-* variables)
	 * - `none`: 0 - No gap
	 * - `xsm`: 0.5rem (8px) - var(--spacing-xsm)
	 * - `sm`: 1rem (16px) - var(--spacing-sm)
	 * - `md`: 1.5rem (24px) - var(--spacing-md)
	 * - `lg`: 2rem (32px) - var(--spacing-lg)
	 * - `xl`: 3rem (48px) - var(--spacing-xl)
	 */
	gap?: 'none' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl';

	/**
	 * Controls how auto-placed items flow into the grid
	 * - `row`: Fill each row before moving to next
	 * - `column`: Fill each column before moving to next
	 * - `dense`: Attempt to fill holes in the grid
	 * - `row dense`: Row flow with hole-filling
	 * - `column dense`: Column flow with hole-filling
	 *
	 * @default 'row'
	 */
	autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
}

/**
 * Container metrics interface for tracking div element properties
 *
 * Provides comprehensive measurements of a container element including
 * dimensions, position, and scroll state.
 */
export interface ContainerMetrics {
	/**
	 * Element dimensions including borders and scrollbars
	 */
	width: number;
	height: number;

	/**
	 * Element position relative to viewport
	 */
	top: number;
	left: number;

	/**
	 * Element position relative to nearest positioned ancestor
	 */
	offsetTop: number;
	offsetLeft: number;

	/**
	 * Total scrollable content dimensions
	 */
	scrollWidth: number;
	scrollHeight: number;

	/**
	 * Current scroll position
	 */
	scrollTop: number;
	scrollLeft: number;

	/**
	 * Inner dimensions excluding scrollbars
	 */
	clientWidth: number;
	clientHeight: number;
}

/**
 * Base props for all container components
 *
 * Extends standard HTML div attributes with container-specific features.
 *
 * @example
 * ```svelte
 * <Container padding="md" bind:metrics={containerMetrics}>
 *   <p>Content with medium padding</p>
 * </Container>
 * ```
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The content to be rendered inside the container
	 */
	children?: Snippet;

	/**
	 * Padding options (maps to CSS --spacing-* variables)
	 * - `none`: 0 - No padding
	 * - `xsm`: 0.5rem (8px) - var(--spacing-xsm)
	 * - `sm`: 1rem (16px) - var(--spacing-sm)
	 * - `md`: 1.5rem (24px) - var(--spacing-md)
	 * - `lg`: 2rem (32px) - var(--spacing-lg)
	 * - `xl`: 3rem (48px) - var(--spacing-xl)
	 */
	padding?: 'none' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl';

	/**
	 * Optional bind property to track container element metrics
	 *
	 * Provides real-time access to container dimensions, position, and scroll state.
	 *
	 * @example
	 * ```svelte
	 * <script>
	 *   let metrics: ContainerMetrics;
	 * </script>
	 *
	 * <Container bind:metrics>
	 *   Width: {metrics?.width}px
	 * </Container>
	 * ```
	 */
	metrics?: ContainerMetrics | undefined;
}
