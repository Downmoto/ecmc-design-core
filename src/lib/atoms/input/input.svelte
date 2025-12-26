<script lang="ts">
	import { HBox, VBox } from '$lib/index.js';
	import Text from '../text/Text.svelte';
	import { defaultProps } from './constants.ts';
	import type { InputProps } from './types.js';

	let {
		type = defaultProps.type!,
		label,
		labelLeft = defaultProps.labelLeft!,
		placeholder = defaultProps.placeholder!
	}: InputProps = $props();
</script>

{#snippet contents()}
	<Text>{label}</Text>
	<input {type} placeholder={placeholder ? label : ''} />
{/snippet}

{#if labelLeft}
	<HBox gap="xsm">
		{@render contents()}
	</HBox>
{:else}
	<VBox gap="none">
		{@render contents()}
	</VBox>
{/if}

<style>
</style>
