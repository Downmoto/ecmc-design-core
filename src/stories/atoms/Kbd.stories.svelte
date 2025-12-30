<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Kbd, HBox } from '$lib/index.js';
	import type { KbdProps } from '$lib/index.js';
	import { expect } from 'storybook/test';

	const { Story } = defineMeta({
		component: Kbd,
		render: template
	});
</script>

{#snippet template(args: KbdProps)}
	<Kbd {...args}>Ctrl</Kbd>
{/snippet}

<Story
	name="Kbd Small"
	args={{ size: 'small' }}
	play={async ({ canvas }) => {
		const kbd = canvas.getByText('Ctrl');

		// check element exists
		await expect(kbd).toBeInTheDocument();

		// check size class
		await expect(kbd.classList.contains('kbd--small')).toBe(true);

		// check it's a kbd element
		await expect(kbd.tagName).toBe('KBD');
	}}
/>

<Story
	name="Kbd Medium"
	args={{ size: 'medium' }}
	play={async ({ canvas }) => {
		const kbd = canvas.getByText('Ctrl');

		// check element exists
		await expect(kbd).toBeInTheDocument();

		// check size class
		await expect(kbd.classList.contains('kbd--medium')).toBe(true);
	}}
/>

<Story
	name="Kbd Large"
	args={{ size: 'large' }}
	play={async ({ canvas }) => {
		const kbd = canvas.getByText('Ctrl');

		// check element exists
		await expect(kbd).toBeInTheDocument();

		// check size class
		await expect(kbd.classList.contains('kbd--large')).toBe(true);
	}}
/>

<Story name="All Sizes Comparison">
	<HBox padding="xsm" gap="sm">
		<Kbd size="small">Esc</Kbd>
		<Kbd size="medium">Tab</Kbd>
		<Kbd size="large">Space</Kbd>
	</HBox>
</Story>
