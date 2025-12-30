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
	play={async ({ canvas, userEvent }) => {
		const button = canvas.getByRole('button') as HTMLButtonElement;

		// Check initial state
		await expect(button.innerText).toBe('Button Text');
		await expect(button.classList.contains('button--primary')).toBe(true);
		await expect(button.disabled).toBe(false);

		// Test click interaction
		await userEvent.click(button);
		await expect(button.innerText).toBe('Button Pressed');

		// Cleanup
		test_label = 'Button Text';
	}}
/>

<Story
	name="Button Secondary"
	args={{ variant: 'secondary' }}
	play={async ({ canvas, userEvent }) => {
		const button = canvas.getByRole('button') as HTMLButtonElement;

		// Check initial state and CSS class
		await expect(button.innerText).toBe('Button Text');
		await expect(button.classList.contains('button--secondary')).toBe(true);
		await expect(button.disabled).toBe(false);

		// Test click interaction
		await userEvent.click(button);
		await expect(button.innerText).toBe('Button Pressed');

		// Cleanup
		test_label = 'Button Text';
	}}
/>

<Story
	name="Button Disabled"
	args={{ variant: 'disabled' }}
	play={async ({ canvas, userEvent }) => {
		const button = canvas.getByRole('button') as HTMLButtonElement;

		// Check disabled state
		await expect(button.disabled).toBe(true);
		await expect(button.classList.contains('button--disabled')).toBe(true);

		// Attempt to click (should not change text)
		await userEvent.click(button);
		await expect(button.innerText).toBe('Button Text');

		// Cleanup
		test_label = 'Button Text';
	}}
/>
