<!--
	@component
	# Text
	
	Provides typography with various size variants, alignment, and styling options.
	Renders as block-level div or inline span based on the inline prop.
	
	@param {Snippet} [children] - The content to be rendered inside the text element
	@param {'headline' | 'subtitle' | 'body' | 'bodyPlus' | 'half'} [variant='body'] - Text variant: 'headline' (3rem/48px), 'subtitle' (2.5rem/40px), 'body' (1rem/16px), 'bodyPlus' (1.2rem/19.2px)
	@param {boolean} [italic=false] - Whether the text should be rendered in italic style
	@param {boolean} [inline=false] - Whether to render as inline span (true) or block-level div (false)
	@param {'left' | 'center' | 'right'} [align='left'] - Horizontal text alignment
	@param {HTMLAttributes<HTMLElement>} [...restProps] - All standard HTML element attributes
-->
<script lang="ts">
	import { cn } from '../../utils/cn.js';
	import type { TextProps } from './types.js';
	import { defaultProps, textVariantClasses, textAlignClasses } from './constants.js';

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
		cn(
			'ecmc',
			'ecmc-text',
			textAlignClasses[align],
			textVariantClasses[variant],
			italic ? 'text--italic' : ''
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
		font-size: var(--ecmc-font-size-4);
	}

	.text--subtitle {
		font-weight: 500;
		font-size: var(--ecmc-font-size-3);
	}

	.text--body-plus {
		font-weight: 300;
		font-size: var(--ecmc-font-size-2);
	}

	.text--body {
		font-weight: 300;
		font-size: var(--ecmc-font-size-1);
	}

	.text--half {
		font-weight: 100;
		font-size: var(--ecmc-font-size-0);
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
