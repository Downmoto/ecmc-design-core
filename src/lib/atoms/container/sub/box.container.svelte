<script lang="ts">
	import Container from '../Container.svelte';
	import type { InternalBoxProps } from '../types.js';

	let {
		children,
		variant,
		gap = 'md',
		align = 'stretch',
		justify = 'flex-start',
		wrap = false,
		metrics = $bindable(),
		...containerProps
	}: InternalBoxProps = $props();

	let flexWrap = $derived(wrap ? 'wrap' : 'nowrap');
	let flexDirection = $derived(variant === 'vertical' ? 'column' : 'row');
</script>

<Container bind:metrics {...containerProps}>
	<div
		class="box"
		style="gap: var(--spacing-{gap}); align-items: {align}; justify-content: {justify}; flex-wrap: {flexWrap}; flex-direction: {flexDirection};"
	>
		{@render children?.()}
	</div>
</Container>

<style>
	.box {
		display: flex;
	}
</style>
