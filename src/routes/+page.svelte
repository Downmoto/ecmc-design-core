<script lang="ts">
	import {
		Text,
		HBox,
		VBox,
		GridBox,
		Centered,
		Button,
		type ContainerMetrics,
		Input
	} from '$lib/index.js';
	import '$lib/utils/ecmc.css';

	let containerMetrics: ContainerMetrics | undefined = $state();

	let isDark = $state(true);

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
	}
</script>

<VBox gap="md" padding="lg">
	<Text variant="headline">Component Demos</Text>
	<VBox gap="sm">
		<Text variant="subtitle">Buttons</Text>
		<HBox bg gap="md" padding="md" justify="space-between">
			<Button>Button One</Button>
			<Button variant="secondary">Button Two</Button>
			<Button variant="disabled">Button Disabled</Button>
		</HBox>
		<Button onclick={toggleTheme}>
			Toggle {isDark ? 'Light' : 'Dark'} Mode
		</Button>

		<Text variant="subtitle">Input</Text>
		<GridBox bg columns={2}>
			<Input value="" label="text input" placeholder="placeholder" />
			<Input value="" label="email input" placeholder="placeholder" type="email" />
			<Input value="" label="text input" />
			<Input value="" placeholder="email" type="email" />
		</GridBox>
	</VBox>

	<Text variant="headline">Layout Components Demo</Text>

	<VBox gap="sm">
		<Text variant="subtitle">HBox - Horizontal Layout</Text>
		<HBox bg gap="md" padding="md">
			<Text>Item 1</Text>
			<Text>Item 2</Text>
			<Text>Item 3</Text>
		</HBox>

		<HBox bg gap="sm" justify="space-between" padding="sm">
			<Text>Start</Text>
			<Text>Space Between</Text>
			<Text>End</Text>
		</HBox>

		<HBox bg gap="md" wrap={true} padding="md">
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
		<VBox bg gap="md" padding="md">
			<Text>Item 1</Text>
			<Text>Item 2</Text>
			<Text>Item 3</Text>
		</VBox>

		<VBox bg gap="sm" align="center" padding="sm">
			<Text>Centered</Text>
			<Text>Alignment</Text>
		</VBox>
	</VBox>

	<VBox gap="sm">
		<Text variant="subtitle">GridBox - Grid Layout</Text>
		<GridBox bg columns={3} gap="md" padding="md">
			<Text align="center">Cell 1</Text>
			<Text>Cell 2</Text>
			<Text>Cell 3</Text>
			<Text align="right">Cell 4</Text>
			<Text>Cell 5</Text>
			<Text>Cell 6</Text>
		</GridBox>

		<GridBox bg columns="200px 1fr 1fr" gap="sm" padding="sm">
			<Text>200px</Text>
			<Text>1fr</Text>
			<Text>1fr</Text>
		</GridBox>
	</VBox>

	<VBox gap="sm">
		<Text variant="subtitle">Centered - Center Alignment</Text>
		<Centered bg padding="md" style="height: 200px;">
			<Text>Fully Centered Content</Text>
		</Centered>

		<Centered bg horizontal={true} vertical={false} padding="md" style="height: 100px;">
			<Text>Horizontally Centered Only</Text>
		</Centered>
	</VBox>

	<VBox gap="sm" bind:metrics={containerMetrics}>
		<Text variant="subtitle">Metrics Tracking</Text>
		<HBox bg gap="md" padding="md">
			<Text>Container with metrics</Text>
			{#if containerMetrics}
				<Text variant="body"
					>Width: {containerMetrics.width.toFixed(0)}px, Height: {containerMetrics.height.toFixed(
						0
					)}px</Text
				>
			{/if}
		</HBox>
	</VBox>
</VBox>
