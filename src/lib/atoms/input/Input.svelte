<!--
	@component
	# Input
	
	A form input field with label support, multiple input types, and responsive label positioning.
	Automatically repositions labels on small screens (< 640px) for better mobile UX.
	
	@param {'text' | 'email' | 'password'} [type='text'] - Type of input field: 'text' (standard), 'email' (with validation), 'password' (masked characters)
	@param {string} [label=''] - Label text displayed above or beside the input, also used for aria-label accessibility
	@param {boolean} [labelLeft=false] - Position label to the left (horizontal layout on desktop, automatically reverts to vertical on screens < 640px)
	@param {string} [placeholder=''] - Placeholder text shown when the input is empty
	@param {string} value - The current value of the input field (bindable using bind:value)
	@param {string} [id] - HTML id attribute for the input element, auto-generated from label if not provided
-->
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
