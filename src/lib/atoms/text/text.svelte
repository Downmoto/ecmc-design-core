<script lang="ts">
	import { cn } from '../../utils/cn.ts';
	import type { TextProps } from './text.svelte.ts';
	import { defaultProps, textVariantClasses } from './text.svelte.ts';

	// Props with defaults
	let {
		children,
		class: className = '',
		variant = defaultProps.variant!,
		...restProps
	}: TextProps = $props();

	let computedClasses = $derived(cn(className, textVariantClasses[variant]));
</script>

<div class={computedClasses} {...restProps}>
	{@render children?.()}
</div>

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
</style>
