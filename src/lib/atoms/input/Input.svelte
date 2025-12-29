<script lang="ts">
	import { HBox, VBox, Centered } from '$lib/index.js';
	import Text from '../text/Text.svelte';
	import { defaultProps } from './constants.ts';
	import type { InputProps } from './types.js';
	import { onMount } from 'svelte';

	let {
		type = defaultProps.type!,
		labelLeft = defaultProps.labelLeft!,
		placeholder = defaultProps.placeholder!,
		value = $bindable(),
		label,
		id: providedId
	}: InputProps = $props();

	let id = $derived(providedId ?? `${label?.replace(/\s+/g, '-')}-id`);

	let isSmallScreen = $state(false);
	let effectiveLabelLeft = $derived(isSmallScreen ? false : labelLeft);

	function checkScreenSize() {
		isSmallScreen = window.innerWidth < 640;
	}

	onMount(() => {
		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	});
</script>

{#snippet contents()}
	<label for={id}>
		<Centered fill={true} padding="none" horizontal={effectiveLabelLeft}>
			<Text>{label}</Text>
		</Centered>
	</label>
	<input
		{id}
		bind:value
		{type}
		{placeholder}
		aria-label={label ? label : 'unlabeled, please report'}
	/>
{/snippet}

{#if effectiveLabelLeft}
	<HBox gap="xsm">
		{@render contents()}
	</HBox>
{:else}
	<VBox gap="none">
		{@render contents()}
	</VBox>
{/if}

<style>
	input {
		padding: var(--spacing-xsm);
		background-color: light-dark(var(--neutral-300), var(--neutral-700));
		border: 1px solid light-dark(var(--neutral-300), var(--neutral-700));
		outline: none;
		width: 100%;
	}

	input::placeholder {
		color: light-dark(var(--neutral-500), var(--neutral-400));
		opacity: 0.7;
	}

	input:focus {
		border-color: light-dark(var(--neutral-900), var(--neutral-300));
	}
</style>
