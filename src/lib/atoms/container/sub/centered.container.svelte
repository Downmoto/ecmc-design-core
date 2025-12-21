<script lang="ts">
	import Container from '../container.svelte';
	import type { ContainerProps } from '../container.svelte.ts';

	interface CenteredProps extends ContainerProps {
		horizontal?: boolean;
		vertical?: boolean;
	}

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
