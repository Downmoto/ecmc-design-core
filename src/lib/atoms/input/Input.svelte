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

<div class="ecmc ecmc-input">
	{#if effectiveLabelLeft}
		<HBox gap="xsm">
			{@render contents()}
		</HBox>
	{:else}
		<VBox gap="none">
			{@render contents()}
		</VBox>
	{/if}
</div>

<style>
	input {
		padding: var(--ecmc-spacing-xsm);
		background-color: light-dark(var(--ecmc-neutral-300), var(--ecmc-neutral-700));
		border: 1px solid light-dark(var(--ecmc-neutral-300), var(--ecmc-neutral-700));
		outline: none;
		width: 100%;
	}

	input::placeholder {
		color: light-dark(var(--ecmc-neutral-500), var(--ecmc-neutral-400));
		opacity: 0.7;
	}

	input:focus {
		border-color: light-dark(var(--ecmc-neutral-900), var(--ecmc-neutral-300));
	}
</style>
