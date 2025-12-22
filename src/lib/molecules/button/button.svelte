<script lang="ts">
	import Centered from '$lib/atoms/container/sub/centered.container.svelte';
	import Text from '$lib/atoms/text/text.svelte';
	import { cn } from '../../utils/cn.ts';
	import { buttonVariantClasses, defaultProps } from './constants.ts';
	import type { ButtonProps } from './types.d.ts';

	let { children, variant = defaultProps.variant! }: ButtonProps = $props();

	let computedClasses = $derived(cn(buttonVariantClasses[variant]));
</script>

<button class={computedClasses}>
	<Centered>
		<Text>
			{@render children?.()}
		</Text>
	</Centered>
</button>

<style>
	.button--primary {
		color: var(--neutral-100);
	}

	.button--secondary {
	}

	.button--disabled {
	}
</style>
