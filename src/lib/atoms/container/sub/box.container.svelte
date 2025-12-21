<script lang="ts" module>
	import type { ContainerProps } from '../container.svelte.ts';

	export interface BoxProps extends ContainerProps {
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
</script>

<script lang="ts">
	import Container from '../container.svelte';

	interface InternalBoxProps extends BoxProps {
		variant: 'horizontal' | 'vertical';
	}

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
