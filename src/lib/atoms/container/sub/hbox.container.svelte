<script lang="ts">
	import Container from '../container.svelte';
	import type { ContainerProps } from '../container.svelte.ts';

	interface HBoxProps extends ContainerProps {
		gap?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl';
		align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
		justify?:
			| 'flex-start'
			| 'center'
			| 'flex-end'
			| 'space-between'
			| 'space-around'
			| 'space-evenly';
		wrap?: boolean;
	}

	let {
		children,
		gap = 'md',
		align = 'stretch',
		justify = 'flex-start',
		wrap = false,
		metrics = $bindable(),
		...containerProps
	}: HBoxProps = $props();

	let flexWrap = $derived(wrap ? 'wrap' : 'nowrap');
</script>

<Container bind:metrics {...containerProps}>
	<div
		class="hbox"
		style="gap: var(--spacing-{gap}); align-items: {align}; justify-content: {justify}; flex-wrap: {flexWrap};"
	>
		{@render children?.()}
	</div>
</Container>

<style>
	.hbox {
		display: flex;
	}
</style>
