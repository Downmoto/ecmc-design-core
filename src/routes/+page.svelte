<script lang="ts">
	import { Text, Container, type ContainerMetrics } from '$lib/index.js';
	import '$lib/utils/ecmc.css';

	let containerMetrics: ContainerMetrics | undefined;
</script>

<Container.VBox gap="md" padding="lg">
	<Text variant="headline">Layout Components Demo</Text>

	<Container.VBox gap="sm">
		<Text variant="subtitle">Text Alignment</Text>
		<Container.VBox
			gap="sm"
			padding="md"
			style="border: 1px solid var(--neutral-100); border-radius: 5px;"
		>
			<Text align="left">Left aligned text (default)</Text>
			<Text align="center">Center aligned text</Text>
			<Text align="right">Right aligned text</Text>
			<Text align="justify"
				>Justified text with enough content to demonstrate the justify alignment. This text should
				stretch to fill the entire width of the container.</Text
			>
		</Container.VBox>
	</Container.VBox>

	<Container.VBox gap="sm">
		<Text variant="subtitle">HBox - Horizontal Layout</Text>
		<Container.HBox
			gap="md"
			padding="md"
			style="border: 1px solid var(--neutral-100); border-radius: 5px;"
		>
			<Text>Item 1</Text>
			<Text>Item 2</Text>
			<Text>Item 3</Text>
		</Container.HBox>

		<Container.HBox
			gap="sm"
			justify="space-between"
			padding="sm"
			style="border: 1px solid var(--neutral-100); border-radius: 5px;"
		>
			<Text>Start</Text>
			<Text>Space Between</Text>
			<Text>End</Text>
		</Container.HBox>

		<Container.HBox
			gap="md"
			wrap={true}
			padding="md"
			style="border: 1px solid var(--neutral-100); border-radius: 5px; max-width: 400px;"
		>
			<Text>Wrapping</Text>
			<Text>Items</Text>
			<Text>When</Text>
			<Text>Container</Text>
			<Text>Gets</Text>
			<Text>Too</Text>
			<Text>Small</Text>
		</Container.HBox>
	</Container.VBox>

	<Container.VBox gap="sm">
		<Text variant="subtitle">VBox - Vertical Layout</Text>
		<Container.VBox
			gap="md"
			padding="md"
			style="border: 1px solid var(--neutral-100); border-radius: 5px;"
		>
			<Text>Item 1</Text>
			<Text>Item 2</Text>
			<Text>Item 3</Text>
		</Container.VBox>

		<Container.VBox
			gap="sm"
			align="center"
			padding="sm"
			style="border: 1px solid var(--neutral-100); border-radius: 5px;"
		>
			<Text>Centered</Text>
			<Text>Alignment</Text>
		</Container.VBox>
	</Container.VBox>

	<Container.VBox gap="sm">
		<Text variant="subtitle">GridBox - Grid Layout</Text>
		<Container.GridBox
			columns={3}
			gap="md"
			padding="md"
			style="border: 1px solid var(--neutral-100); border-radius: 5px;"
		>
			<Text>Cell 1</Text>
			<Text>Cell 2</Text>
			<Text>Cell 3</Text>
			<Text>Cell 4</Text>
			<Text>Cell 5</Text>
			<Text>Cell 6</Text>
		</Container.GridBox>

		<Container.GridBox
			columns="200px 1fr 1fr"
			gap="sm"
			padding="sm"
			style="border: 1px solid var(--neutral-100); border-radius: 5px;"
		>
			<Text>200px</Text>
			<Text>1fr</Text>
			<Text>1fr</Text>
		</Container.GridBox>
	</Container.VBox>

	<Container.VBox gap="sm">
		<Text variant="subtitle">Centered - Center Alignment</Text>
		<Container.Centered
			padding="md"
			style="border: 1px solid var(--neutral-100); border-radius: 5px; height: 200px;"
		>
			<Text>Fully Centered Content</Text>
		</Container.Centered>

		<Container.Centered
			horizontal={true}
			vertical={false}
			padding="md"
			style="border: 1px solid var(--neutral-100); border-radius: 5px; height: 100px;"
		>
			<Text>Horizontally Centered Only</Text>
		</Container.Centered>
	</Container.VBox>

	<Container.VBox gap="sm" bind:metrics={containerMetrics}>
		<Text variant="subtitle">Metrics Tracking</Text>
		<Container.HBox
			gap="md"
			padding="md"
			style="border: 1px solid var(--neutral-100); border-radius: 5px;"
		>
			<Text>Container with metrics</Text>
			{#if containerMetrics}
				<Text variant="body"
					>Width: {containerMetrics.width.toFixed(0)}px, Height: {containerMetrics.height.toFixed(
						0
					)}px</Text
				>
			{/if}
		</Container.HBox>
	</Container.VBox>
</Container.VBox>
