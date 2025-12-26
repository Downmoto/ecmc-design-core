<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Button } from '$lib/index.js';
	import type { ButtonProps } from '$lib/index.js';
	import { expect } from 'storybook/test';

	const { Story } = defineMeta({
		component: Button,
		render: template
	});

	let test_label: string = $state('Button Text');
</script>

{#snippet template(args: ButtonProps)}
	<Button {...args} onclick={() => (test_label = 'Button Pressed')}>{test_label}</Button>
{/snippet}

<Story
	name="Button Primary"
	args={{ variant: 'primary' }}
	play={async ({ canvas, userEvent: userEvent }) => {
		await userEvent.click(canvas.getByRole('button'));

		await expect(canvas.getByRole('button').innerText).toBe('Button Pressed');

		test_label = 'Button Text';
	}}
/>

<Story
	name="Button Secondary"
	args={{ variant: 'secondary' }}
	play={async ({ canvas, userEvent }) => {
		await userEvent.click(canvas.getByRole('button'));

		await expect(canvas.getByRole('button').innerText).toBe('Button Pressed');

		test_label = 'Button Text';
	}}
/>

<Story
	name="Button Disabled"
	args={{ variant: 'disabled' }}
	play={async ({ canvas, userEvent }) => {
		await userEvent.click(canvas.getByRole('button'));

		await expect(canvas.getByRole('button').innerText).not.toBe('Button Pressed');

		test_label = 'Button Text';
	}}
/>
