<!--
	@component
	# GridBox
	
	A CSS Grid container with customizable columns, gap spacing, and auto-flow behavior.
	
	@param {Snippet} [children] - The content to be rendered inside the grid box
	@param {number | string} [columns=2] - Number of columns (e.g., 3 → repeat(3, 1fr)) or custom grid-template-columns value
	@param {'none' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl'} [gap='md'] - Gap spacing between grid items mapped to CSS --spacing-* variables
	@param {'row' | 'column' | 'dense' | 'row dense' | 'column dense'} [autoFlow='row'] - Controls how auto-placed items flow into the grid
	@param {ContainerMetrics} [metrics] - Bindable prop to track real-time container element metrics
	@param {ContainerProps} [...containerProps] - All standard Container props (padding, fill, bg, rounding, etc.)
-->
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
		style="grid-template-columns: {gridTemplateColumns}; gap: var(--ecmc-spacing-{gap}); grid-auto-flow: {autoFlow};"
	>
		{@render children?.()}
	</div>
</Container>

<style>
	.gridbox {
		display: grid;
	}
</style>
