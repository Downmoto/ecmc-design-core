<script lang="ts">
	import Box, { type BoxProps } from './box.container.svelte';

	let { metrics = $bindable(), ...props }: BoxProps = $props();
</script>

<Box variant="horizontal" bind:metrics {...props}>
	{@render props.children?.()}
</Box>
