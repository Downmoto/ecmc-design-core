<script lang="ts">
	import Container from '../Container.svelte';
	import type { GridBoxProps } from '../types.js';

	let {
		children,
		columns = 2,
		gap = 'md',
		autoFlow = 'row',
		metrics = $bindable(),
		...containerProps
	}: GridBoxProps = $props();

	let gridTemplateColumns = $derived(
		typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns
	);
</script>

<Container bind:metrics {...containerProps}>
	<div
		class="gridbox"
		style="grid-template-columns: {gridTemplateColumns}; gap: var(--spacing-{gap}); grid-auto-flow: {autoFlow};"
	>
		{@render children?.()}
	</div>
</Container>

<style>
	.gridbox {
		display: grid;
	}
</style>
