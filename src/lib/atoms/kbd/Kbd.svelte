<script lang="ts">
	import { cn } from '../../utils/cn.js';
	import type { KbdProps } from './types.js';
	import { defaultProps, kbdSizeClasses } from './constants.js';
	import Centered from '../container/sub/centered.container.svelte';

	let { children, size = defaultProps.size!, ...restProps }: KbdProps = $props();

	let computedClasses = $derived(cn('ecmc', 'ecmc-kbd', kbdSizeClasses[size]));
</script>

<Centered padding="none" fill={false}>
	<kbd class={computedClasses} {...restProps}>
		{@render children?.()}
	</kbd>
</Centered>

<style>
	kbd {
		background-color: light-dark(var(--ecmc-neutral-100), var(--ecmc-neutral-700));
		color: light-dark(var(--ecmc-neutral-900), var(--ecmc-neutral-100));
		border-color: light-dark(var(--ecmc-neutral-300), var(--ecmc-neutral-500));
		display: inline-block;
		line-height: 1;
		border-radius: var(--ecmc-rounding-size-1);
		border: 1px solid;
	}

	.kbd--small {
		padding: calc(var(--ecmc-spacing-xsm) * 0.5) var(--ecmc-spacing-xsm);
		font-size: var(--ecmc-font-size-0);
	}

	.kbd--medium {
		padding: var(--ecmc-spacing-xsm) var(--ecmc-spacing-sm);
		font-size: var(--ecmc-font-size-1);
	}

	.kbd--large {
		padding: var(--ecmc-spacing-sm) var(--ecmc-spacing-md);
		font-size: var(--ecmc-font-size-2);
	}
</style>
