<script lang="ts">
	import { cn } from '../../utils/cn.ts';
	import type { TextProps } from './types.ts';
	import { defaultProps, textVariantClasses, textAlignClasses } from './constants.ts';

	// Props with defaults
	let {
		children,
		variant = defaultProps.variant!,
		italic = defaultProps.italic!,
		weight = defaultProps.weight!,
		inline = defaultProps.inline!,
		align = defaultProps.align!,
		...restProps
	}: TextProps = $props();

	let computedClasses = $derived(
		cn(textAlignClasses[align], textVariantClasses[variant], italic ? 'text--italic' : '')
	);
</script>

{#if inline}
	<span class={computedClasses} style="font-weight: {weight};" {...restProps}>
		{@render children?.()}
	</span>
{:else}
	<div class={computedClasses} style="font-weight: {weight};" {...restProps}>
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

	.text--align-center {
		text-align: center;
	}

	.text--align-right {
		text-align: right;
	}
</style>
