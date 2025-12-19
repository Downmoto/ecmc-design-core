<script lang="ts">
	import { Text, Container, type ContainerMetrics } from '$lib/index.js';
	import '$lib/utils/ecmc.css'
	
	let containerMetrics: ContainerMetrics | undefined;
</script>

<div class="text">
	<Text variant="headline">hello mono! headline</Text>
	<Text variant="subtitle">hello mono! subtitle</Text>
	<Text variant="bodyPlus">hello mono! bodyplus</Text>
	<Text variant="body">hello mono! body</Text>
	
	<Text weight={500}>hello <Text weight={700} inline>mono!</Text></Text>
	<Text variant="body" weight={700} italic>hello mono!</Text>
</div>

<div class="containers">
	<Text variant="headline">Container Examples</Text>
	
	<Container padding="xsm">
		<Text>Container with xsm padding (8px)</Text>
	</Container>
	
	<Container padding="sm">
		<Text>Container with sm padding (16px)</Text>
	</Container>
	
	<Container padding="md">
		<Text>Container with md padding (24px)</Text>
	</Container>
	
	<Container padding="lg">
		<Text>Container with lg padding (32px)</Text>
	</Container>
	
	<Container padding="xl">
		<Text>Container with xl padding (64px)</Text>
	</Container>
	
	<Container bind:metrics={containerMetrics}>
		<Text>Container with metrics tracking</Text>
		{#if containerMetrics}
			<Text variant="body">Width: {containerMetrics.width.toFixed(0)}px, Height: {containerMetrics.height.toFixed(0)}px</Text>
		{/if}
	</Container>
	
	<Container padding="md" class="custom-container">
		<Text>Container with custom styling</Text>
	</Container>
</div>

<style>
	.containers {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.containers :global([class*="container--padding"]) {
		border: 1px solid var(--neutral-100);
		border-radius: 5px;
	}
</style>
