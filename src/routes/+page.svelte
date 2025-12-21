<script lang="ts">
	import { Text, HBox, VBox, GridBox, Centered, type ContainerMetrics } from '$lib/index.js';
	import '$lib/utils/ecmc.css';

	let containerMetrics: ContainerMetrics | undefined;
</script>

<VBox gap="md" padding="lg">
	<Text variant="headline">Layout Components Demo</Text>

	<VBox gap="sm">
		<Text variant="subtitle">HBox - Horizontal Layout</Text>
		<HBox gap="md" padding="md" style="border: 1px solid var(--neutral-100); border-radius: 5px;">
			<Text>Item 1</Text>
			<Text>Item 2</Text>
			<Text>Item 3</Text>
		</HBox>

		<HBox gap="sm" justify="space-between" padding="sm" style="border: 1px solid var(--neutral-100); border-radius: 5px;">
			<Text>Start</Text>
			<Text>Space Between</Text>
			<Text>End</Text>
		</HBox>

		<HBox gap="md" wrap={true} padding="md" style="border: 1px solid var(--neutral-100); border-radius: 5px; max-width: 400px;">
			<Text>Wrapping</Text>
			<Text>Items</Text>
			<Text>When</Text>
			<Text>Container</Text>
			<Text>Gets</Text>
			<Text>Too</Text>
			<Text>Small</Text>
		</HBox>
	</VBox>

	<VBox gap="sm">
		<Text variant="subtitle">VBox - Vertical Layout</Text>
		<VBox gap="md" padding="md" style="border: 1px solid var(--neutral-100); border-radius: 5px;">
			<Text>Item 1</Text>
			<Text>Item 2</Text>
			<Text>Item 3</Text>
		</VBox>

		<VBox gap="sm" align="center" padding="sm" style="border: 1px solid var(--neutral-100); border-radius: 5px;">
			<Text>Centered</Text>
			<Text>Alignment</Text>
		</VBox>
	</VBox>

	<VBox gap="sm">
		<Text variant="subtitle">GridBox - Grid Layout</Text>
		<GridBox columns={3} gap="md" padding="md" style="border: 1px solid var(--neutral-100); border-radius: 5px;">
			<Text>Cell 1</Text>
			<Text>Cell 2</Text>
			<Text>Cell 3</Text>
			<Text>Cell 4</Text>
			<Text>Cell 5</Text>
			<Text>Cell 6</Text>
		</GridBox>

		<GridBox columns="200px 1fr 1fr" gap="sm" padding="sm" style="border: 1px solid var(--neutral-100); border-radius: 5px;">
			<Text>200px</Text>
			<Text>1fr</Text>
			<Text>1fr</Text>
		</GridBox>
	</VBox>

	<VBox gap="sm">
		<Text variant="subtitle">Centered - Center Alignment</Text>
		<Centered padding="md" style="border: 1px solid var(--neutral-100); border-radius: 5px; height: 200px;">
			<Text>Fully Centered Content</Text>
		</Centered>

		<Centered horizontal={true} vertical={false} padding="md" style="border: 1px solid var(--neutral-100); border-radius: 5px; height: 100px;">
			<Text>Horizontally Centered Only</Text>
		</Centered>
	</VBox>

	<VBox gap="sm" bind:metrics={containerMetrics}>
		<Text variant="subtitle">Metrics Tracking</Text>
		<HBox gap="md" padding="md" style="border: 1px solid var(--neutral-100); border-radius: 5px;">
			<Text>Container with metrics</Text>
			{#if containerMetrics}
				<Text variant="body">Width: {containerMetrics.width.toFixed(0)}px, Height: {containerMetrics.height.toFixed(0)}px</Text>
			{/if}
		</HBox>
	</VBox>
</VBox>

