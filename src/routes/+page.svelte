<script lang="ts">
	import { Container } from '$lib';
</script>

<h1>ECMC Design Core - Container Component</h1>

<div class="demo-section">
	<h2>Default Container</h2>
	<Container>
		<p>This is a default container with standard styling.</p>
	</Container>
</div>

<div class="demo-section">
	<h2>Bordered Container</h2>
	<Container variant="bordered" padding="lg">
		<p>This is a bordered container with large padding.</p>
	</Container>
</div>

<div class="demo-section">
	<h2>Elevated Container</h2>
	<Container variant="elevated" size="sm">
		<p>This is an elevated container with shadow and small size.</p>
	</Container>
</div>

<div class="demo-section">
	<h2>Outlined Container</h2>
	<Container variant="outlined" padding="xl">
		<p>This is an outlined container with extra large padding.</p>
	</Container>
</div>

<div class="demo-section">
	<h2>Fluid Container</h2>
	<Container fluid variant="bordered" padding="md">
		<p>This is a fluid container that takes full width.</p>
	</Container>
</div>

<style>
	.demo-section {
		margin: 2rem 0;
		padding: 1rem 0;
	}
	
	.demo-section h2 {
		margin-bottom: 1rem;
		color: #333;
	}
	
	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		margin: 0;
		padding: 2rem;
		background: #fafafa;
	}
</style>
