<script lang="ts">
	import { Text } from '$lib/index.js';
	import '$lib/utils/ecmc.css'
</script>

<div class="text">
	<Text variant="headline">hello mono!</Text>
	<Text variant="subtitle">hello mono!</Text>
	<Text variant="bodyPlus">hello mono!</Text>
	<Text variant="body">hello mono!</Text>
	<Text weight={500}>hello <Text weight={700} inline>mono!</Text></Text>
	<Text variant="body" weight={700} italic>hello mono!</Text>
</div>

<style>
</style>
