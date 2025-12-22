<script lang="ts">
	import Centered from '$lib/atoms/container/sub/centered.container.svelte';
	import Text from '$lib/atoms/text/text.svelte';
	import { cn } from '../../utils/cn.ts';
	import { buttonVariantClasses, defaultProps } from './constants.ts';
	import type { ButtonProps } from './types.d.ts';

	let { children, onclick, variant = defaultProps.variant! }: ButtonProps = $props();

	let computedClasses = $derived(cn(buttonVariantClasses[variant]));
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
		border-radius: var(--rounding-size-1);
		cursor: pointer;
	}

	.button--primary {
		background-color: var(--red-600);
		color: var(--neutral-100);
	}

	.button--primary:hover {
		background-color: var(--red-700);
	}

	.button--primary:active {
		background-color: var(--red-900);
	}

	.button--secondary {
		background-color: var(--neutral-300);
		color: var(--neutral-950);
	}

	.button--secondary:hover {
		background-color: var(--neutral-400);
	}

	.button--secondary:active {
		background-color: var(--neutral-100);
	}

	.button--disabled {
		background-color: var(--neutral-300);
		color: var(--neutral-400);
		cursor: not-allowed;
		opacity: 0.6;
	}

	.button--disabled:hover {
		background-color: var(--neutral-300);
	}
</style>
