<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Text } from '$lib/index.js';
	import type { TextProps } from '$lib/index.js';
	import { expect } from 'storybook/test';

	const { Story } = defineMeta({
		component: Text,
		render: template
	});
</script>

{#snippet template(args: TextProps)}
	<div class="styling-container">
		<Text {...args}>Sample Text Content</Text>
	</div>

	<style>
		.styling-container {
			max-width: 800px;
			width: 100%;
		}
	</style>
{/snippet}

<Story
	name="Text Headline"
	args={{ variant: 'headline', align: 'center' }}
	play={async ({ canvas }) => {
		const textElement = canvas.getByText('Sample Text Content');

		// Check variant class
		await expect(textElement.classList.contains('text--headline')).toBe(true);
		await expect(textElement.classList.contains('text--align-center')).toBe(true);

		// Check it's a div (not inline)
		await expect(textElement.tagName).toBe('DIV');

		// Check content
		await expect(textElement.innerText).toBe('Sample Text Content');
	}}
/>

<Story
	name="Text Subtitle"
	args={{ variant: 'subtitle', align: 'center' }}
	play={async ({ canvas }) => {
		const textElement = canvas.getByText('Sample Text Content');

		// Check variant class
		await expect(textElement.classList.contains('text--subtitle')).toBe(true);
		await expect(textElement.classList.contains('text--align-center')).toBe(true);
	}}
/>

<Story
	name="Text Body Plus"
	args={{ variant: 'bodyPlus', align: 'center' }}
	play={async ({ canvas }) => {
		const textElement = canvas.getByText('Sample Text Content');

		// Check variant class
		await expect(textElement.classList.contains('text--body-plus')).toBe(true);
	}}
/>

<Story
	name="Text Body"
	args={{ variant: 'body', align: 'center' }}
	play={async ({ canvas }) => {
		const textElement = canvas.getByText('Sample Text Content');

		// Check variant class
		await expect(textElement.classList.contains('text--body')).toBe(true);
		await expect(textElement.classList.contains('text--align-center')).toBe(true);
	}}
/>

<Story
	name="Text Half"
	args={{ variant: 'half', align: 'center' }}
	play={async ({ canvas }) => {
		const textElement = canvas.getByText('Sample Text Content');

		// Check variant class
		await expect(textElement.classList.contains('text--half')).toBe(true);
		await expect(textElement.classList.contains('text--align-center')).toBe(true);
	}}
/>

<Story
	name="Text Italic"
	args={{ variant: 'body', italic: true, align: 'center' }}
	play={async ({ canvas }) => {
		const textElement = canvas.getByText('Sample Text Content');

		// Check italic class
		await expect(textElement.classList.contains('text--italic')).toBe(true);
		await expect(textElement.classList.contains('text--body')).toBe(true);
	}}
/>

<Story
	name="Text Inline"
	args={{ variant: 'body', inline: true, align: 'center' }}
	play={async ({ canvas }) => {
		const textElement = canvas.getByText('Sample Text Content');

		// Check it's a span (inline)
		await expect(textElement.tagName).toBe('SPAN');
		await expect(textElement.classList.contains('text--body')).toBe(true);
	}}
/>

<Story
	name="Text Center Aligned"
	args={{ variant: 'body', align: 'center' }}
	play={async ({ canvas }) => {
		const textElement = canvas.getByText('Sample Text Content');

		// Check alignment class
		await expect(textElement.classList.contains('text--align-center')).toBe(true);
	}}
/>

<Story
	name="Text Right Aligned"
	args={{ variant: 'body', align: 'right' }}
	play={async ({ canvas }) => {
		const textElement = canvas.getByText('Sample Text Content');

		// Check alignment class
		await expect(textElement.classList.contains('text--align-right')).toBe(true);
	}}
/>
