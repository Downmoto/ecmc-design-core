<script lang="ts">
	import { cn } from '../../utils/cn.js';
	import type { KbdProps } from './types.js';
	import { defaultProps, kbdSizeClasses } from './constants.js';
	import Centered from '../container/sub/centered.container.svelte';

	let { children, size = defaultProps.size!, ...restProps }: KbdProps = $props();

	let computedClasses = $derived(cn(kbdSizeClasses[size]));
</script>

<Centered padding="none" fill={false}>
	<kbd class={computedClasses} {...restProps}>
		{@render children?.()}
	</kbd>
</Centered>

<style>
	kbd {
		background-color: light-dark(var(--neutral-100), var(--neutral-700));
		color: light-dark(var(--neutral-900), var(--neutral-100));
		border-color: light-dark(var(--neutral-300), var(--neutral-500));
		display: inline-block;
		line-height: 1;
		border-radius: var(--rounding-size-1);
		border: 1px solid;
	}

	.kbd--small {
		padding: calc(var(--spacing-xsm) * 0.5) var(--spacing-xsm);
		font-size: var(--font-size-0);
	}

	.kbd--medium {
		padding: var(--spacing-xsm) var(--spacing-sm);
		font-size: var(--font-size-1);
	}

	.kbd--large {
		padding: var(--spacing-sm) var(--spacing-md);
		font-size: var(--font-size-2);
	}
</style>
