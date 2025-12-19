<script lang="ts">
	import { cn } from '../utils/cn.js';
	import type { ContainerProps } from './container.svelte.ts';
	import {
		defaultProps,
		containerVariantClasses,
		containerSizeClasses,
		containerPaddingClasses
	} from './container.svelte.ts';

	// Props with defaults
	let {
		children,
		class: className = '',
		variant = defaultProps.variant!,
		size = defaultProps.size!,
		padding = defaultProps.padding!,
		fluid = defaultProps.fluid!,
		...restProps
	}: ContainerProps = $props();

	// Compute CSS classes
	let computedClasses = $derived(
		cn(
			'container',
			containerVariantClasses[variant],
			containerSizeClasses[size],
			containerPaddingClasses[padding],
			fluid && 'container--fluid',
			className
		)
	);
</script>

<div
	class={computedClasses}
	{...restProps}
	onclick
	onmouseenter
	onmouseleave
	onfocus
	onblur
>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.container {
		/* Base container styles */
		display: block;
		width: 100%;
		max-width: 100%;
		box-sizing: border-box;
	}

	/* Variant styles */
	.container--default {
		background: transparent;
	}

	.container--bordered {
		border: 1px solid hsl(var(--border, 214 32% 91%));
		border-radius: 0.375rem;
	}

	.container--elevated {
		background: hsl(var(--background, 0 0% 100%));
		border-radius: 0.375rem;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	.container--outlined {
		border: 2px solid hsl(var(--primary, 222 84% 4.9%));
		border-radius: 0.375rem;
		background: transparent;
	}

	/* Size styles */
	.container--sm {
		max-width: 640px;
		margin: 0 auto;
	}

	.container--md {
		max-width: 768px;
		margin: 0 auto;
	}

	.container--lg {
		max-width: 1024px;
		margin: 0 auto;
	}

	.container--xl {
		max-width: 1280px;
		margin: 0 auto;
	}

	.container--full {
		max-width: none;
		width: 100%;
	}

	/* Padding styles */
	.container--padding-none {
		padding: 0;
	}

	.container--padding-sm {
		padding: 0.5rem;
	}

	.container--padding-md {
		padding: 1rem;
	}

	.container--padding-lg {
		padding: 1.5rem;
	}

	.container--padding-xl {
		padding: 2rem;
	}

	/* Fluid modifier */
	.container--fluid {
		max-width: none;
		width: 100%;
	}

	/* Responsive breakpoints */
	@media (max-width: 640px) {
		.container--sm,
		.container--md,
		.container--lg,
		.container--xl {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
</style>