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
		id
	}: InputProps = $props();

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
		class="input-field"
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
	.input-field {
		padding: var(--spacing-xsm);
		background-color: light-dark(var(--neutral-100), var(--neutral-900));
		border: 1px solid light-dark(var(--neutral-400), var(--neutral-400));
		border-radius: var(--rounding-size-1);
		outline: none;
		width: 100%;
	}

	.input-field::placeholder {
		color: light-dark(var(--neutral-400), var(--neutral-400));
		opacity: 0.7;
	}

	.input-field:focus {
		border-color: light-dark(var(--red-600), var(--red-500));
		box-shadow: 0 0 0 2px light-dark(rgba(186, 24, 27, 0.1), rgba(229, 56, 59, 0.1));
	}

	.input-field:hover:not(:focus) {
		border-color: light-dark(var(--neutral-950), var(--neutral-300));
	}
</style>
