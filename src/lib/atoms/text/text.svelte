<script lang="ts">
	import { cn } from '../../utils/cn.ts';
	import type { TextProps } from './text.svelte.ts';
	import {
		defaultProps,
		textVariantClasses,
		textItalicClass,
		textWeightClasses
	} from './text.svelte.ts';

	// Props with defaults
	let {
		children,
		class: className = '',
		variant = defaultProps.variant!,
		italic = defaultProps.italic!,
		weight = defaultProps.weight!,
		inline = defaultProps.inline!,
		...restProps
	}: TextProps = $props();

	let computedClasses = $derived(
		cn(
			className,
			textVariantClasses[variant],
			textItalicClass[String(italic) as keyof typeof textItalicClass],
			textWeightClasses[weight]
		)
	);
</script>

{#if inline}
	<span class={computedClasses} {...restProps}>
		{@render children?.()}
	</span>
{:else}
	<div class={computedClasses} {...restProps}>
		{@render children?.()}
	</div>
{/if}

<style>
	.text--headline {
		font-weight: 700;
		font-size: 48px;
	}

	.text--subtitle {
		font-weight: 500;
		font-size: 36px;
	}

	.text--body {
		font-weight: 300;
		font-size: 16px;
	}

	.text--body-plus {
		font-weight: 300;
		font-size: 18px;
	}

	.text--italic {
		font-style: italic;
	}

	.text--100 {
		font-weight: 100;
	}

	.text--200 {
		font-weight: 200;
	}

	.text--300 {
		font-weight: 300;
	}

	.text--400 {
		font-weight: 400;
	}

	.text--500 {
		font-weight: 500;
	}

	.text--600 {
		font-weight: 600;
	}

	.text--700 {
		font-weight: 700;
	}
</style>
