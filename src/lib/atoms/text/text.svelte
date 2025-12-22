<script lang="ts">
	import { cn } from '../../utils/cn.ts';
	import type { TextProps } from './types.ts';
	import { defaultProps, textVariantClasses, textAlignClasses } from './constants.ts';

	// Props with defaults
	let {
		children,
		variant = defaultProps.variant!,
		italic = defaultProps.italic!,
		inline = defaultProps.inline!,
		align = defaultProps.align!,
		...restProps
	}: TextProps = $props();

	let computedClasses = $derived(
		cn(textAlignClasses[align], textVariantClasses[variant], italic ? 'text--italic' : '')
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
		font-size: var(--font-size-4);
	}

	.text--subtitle {
		font-weight: 500;
		font-size: var(--font-size-3);
	}

	.text--body-plus {
		font-weight: 300;
		font-size: var(--font-size-2);
	}

	.text--body {
		font-weight: 300;
		font-size: var(--font-size-1);
	}

	.text--italic {
		font-style: italic;
	}

	.text--align-center {
		text-align: center;
	}

	.text--align-right {
		text-align: right;
	}
</style>
