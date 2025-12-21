<script lang="ts">
	import Box from './box.container.svelte';
	import type { BoxProps } from '../types.js';

	let { metrics = $bindable(), ...props }: BoxProps = $props();
</script>

<Box variant="horizontal" bind:metrics {...props}>
	{@render props.children?.()}
</Box>
