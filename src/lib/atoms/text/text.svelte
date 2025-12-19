<script lang="ts">
	import { cn } from '../../utils/cn.ts';
	import type { TextProps } from './text.svelte.ts';

	// Props with defaults
	let { children, class: className = '', ...restProps }: TextProps = $props();

	let computedClasses = $derived(cn(className));
</script>

<div class={computedClasses} {...restProps}>
    {@render children?.()}
</div>

<style>

</style>