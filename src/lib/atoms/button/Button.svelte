<!--
	@component
	# Button
	
	A foundational button component supporting multiple visual variants.
	
	@param {Snippet} [children] - The content to be rendered inside the button
	@param {'primary' | 'secondary' | 'disabled'} [variant='primary'] - Visual variant: 'primary' (main action with --red-500/600/700), 'secondary' (alternative with --neutral-100/300/400), 'disabled' (non-interactive with reduced opacity)
	@param {(event: MouseEvent) => void} [onclick] - Click handler for button interactions
-->
<script lang="ts">
	import { cn } from '../../utils/cn.js';
	import { Centered, Text } from '$lib/index.js';

	import { buttonVariantClasses, defaultProps } from './constants.js';
	import type { ButtonProps } from './types.js';

	let { children, onclick, variant = defaultProps.variant! }: ButtonProps = $props();

	let computedClasses = $derived(cn('ecmc', 'ecmc-button', buttonVariantClasses[variant]));
</script>

<button class={computedClasses} disabled={variant === 'disabled'} {onclick}>
	<Centered padding="xsm">
		<Text>
			{@render children?.()}
		</Text>
	</Centered>
</button>

<style>
	button {
		border: none;
		border-radius: var(--ecmc-rounding-size-1);
		cursor: pointer;
	}

	.button--primary {
		background-color: var(--ecmc-primary-600);
		color: var(--neutral-100);
	}

	.button--primary:hover {
		background-color: var(--ecmc-primary-700);
	}

	.button--primary:active {
		background-color: var(--ecmc-primary-900);
	}

	.button--secondary {
		background-color: var(--ecmc-neutral-400);
		color: var(--neutral-100);
	}

	.button--secondary:hover {
		background-color: var(--ecmc-neutral-500);
		color: var(--neutral-100);
	}

	.button--secondary:active {
		background-color: var(--ecmc-neutral-600);
	}

	.button--disabled {
		background-color: var(--ecmc-neutral-300);
		color: var(--neutral-600);
		cursor: not-allowed;
		opacity: 0.6;
	}
</style>
