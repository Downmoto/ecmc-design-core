<!--
	@component
	# Centered
	
	A container component that centers content horizontally and/or vertically using flexbox.
	
	@param {Snippet} [children] - The content to be rendered inside the centered container
	@param {boolean} [horizontal=true] - Whether to center content horizontally
	@param {boolean} [vertical=true] - Whether to center content vertically
	@param {ContainerMetrics} [metrics] - Bindable prop to track real-time container element metrics
	@param {ContainerProps} [...containerProps] - All standard Container props (padding, fill, bg, rounding, etc.)
-->
<script lang="ts">
	import Container from '../Container.svelte';
	import type { CenteredProps } from '../types.js';

	let {
		children,
		horizontal = true,
		vertical = true,
		metrics = $bindable(),
		...containerProps
	}: CenteredProps = $props();

	let justifyContent = $derived(horizontal ? 'center' : 'flex-start');
	let alignItems = $derived(vertical ? 'center' : 'stretch');
</script>

<Container bind:metrics {...containerProps}>
	<div class="centered" style="justify-content: {justifyContent}; align-items: {alignItems};">
		{@render children?.()}
	</div>
</Container>

<style>
	.centered {
		display: flex;
		height: 100%;
	}
</style>
