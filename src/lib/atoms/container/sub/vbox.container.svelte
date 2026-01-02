<!--
	@component
	# VBox
	
	A vertical flexbox container (column layout) with customizable gap, alignment, and wrapping.
	
	@param {Snippet} [children] - The content to be rendered inside the vertical box
	@param {'none' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl'} [gap] - Gap spacing between flex items mapped to CSS --spacing-* variables
	@param {'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'} [align='flex-start'] - Cross-axis alignment of flex items
	@param {'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'} [justify='flex-start'] - Main-axis justification of flex items
	@param {boolean} [wrap=false] - Whether flex items should wrap to multiple lines
	@param {ContainerMetrics} [metrics] - Bindable prop to track real-time container element metrics
	@param {ContainerProps} [...props] - All standard Container props (padding, fill, bg, rounding, etc.)
-->
<script lang="ts">
	import Box from './box.container.svelte';
	import type { BoxProps } from '../types.js';

	let { metrics = $bindable(), ...props }: BoxProps = $props();
</script>

<Box variant="vertical" bind:metrics {...props}>
	{@render props.children?.()}
</Box>
