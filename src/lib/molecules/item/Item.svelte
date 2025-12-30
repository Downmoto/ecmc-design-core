<script lang="ts">
	import { HBox, VBox, Text } from '$lib/index.js';
	import type { ItemProps } from './types.js';

	let { text, subtitle, action }: ItemProps = $props();
</script>

<HBox bg rounding padding="xsm" justify="space-between">
	<VBox gap="none" padding="none">
		<Text>{text}</Text>
		<Text variant="half">{subtitle}</Text>
	</VBox>
	{@render action?.()}
</HBox>
