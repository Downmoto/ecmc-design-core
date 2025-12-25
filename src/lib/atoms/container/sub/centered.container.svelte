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
