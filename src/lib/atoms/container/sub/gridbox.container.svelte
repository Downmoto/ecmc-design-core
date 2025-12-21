<script lang="ts">
	import Container from '../container.svelte';
	import type { ContainerProps } from '../container.svelte.js';

	interface GridBoxProps extends ContainerProps {
		columns?: number | string;
		gap?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl';
		autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
	}

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
