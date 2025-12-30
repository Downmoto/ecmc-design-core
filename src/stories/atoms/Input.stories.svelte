<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Input } from '$lib/index.js';
	import type { InputProps } from '$lib/index.js';
	import { expect } from 'storybook/test';

	const { Story } = defineMeta({
		component: Input,
		render: template
	});

	let testValue: string = $state('');
</script>

{#snippet template(args: InputProps)}
	<Input {...args} />
{/snippet}

<Story
	name="Input"
	args={{ label: 'Label', id: 'input', value: testValue }}
	play={async ({ canvas }) => {
		const input = canvas.getByRole('textbox', { name: 'Label' });
		const label = canvas.getByText('Label');

		// Check label exists
		await expect(label).toBeTruthy();

		// Check input attributes
		await expect(input.id).toBe('input');
		await expect(input.getAttribute('type')).toBe('text');
		await expect(input.getAttribute('aria-label')).toBe('Label');

		// Cleanup
		testValue = '';
	}}
/>

<Story
	name="Input with value"
	args={{ label: 'Label', value: 'initial value', id: 'input-w-value' }}
	play={async ({ canvas, userEvent }) => {
		const input = canvas.getByRole('textbox', { name: 'Label' }) as HTMLInputElement;

		// Check initial value
		await expect(input.value).toBe('initial value');

		// Test typing
		await userEvent.clear(input);
		await userEvent.type(input, 'new value');
		await expect(input.value).toBe('new value');
	}}
/>

<Story
	name="Input with password value"
	args={{ label: 'Password', value: 'password-value', type: 'password', id: 'input-w-pass' }}
	play={async ({ canvas }) => {
		const input = canvas.getByLabelText('Password') as HTMLInputElement;

		// Check type is password
		await expect(input.getAttribute('type')).toBe('password');
		await expect(input.value).toBe('password-value');
	}}
/>

<Story
	name="Input Label Left"
	args={{ label: 'Label', labelLeft: true, id: 'input-label-left', value: '' }}
	play={async ({ canvas }) => {
		const input = canvas.getByRole('textbox', { name: 'Label' });
		const label = canvas.getByText('Label');

		// Check label and input exist
		await expect(label).toBeTruthy();
		await expect(input).toBeTruthy();
	}}
/>

<Story
	name="Input Placeholder"
	args={{ label: 'Label', placeholder: 'Enter text here', id: 'input-placeholder', value: '' }}
	play={async ({ canvas }) => {
		const input = canvas.getByRole('textbox', { name: 'Label' });

		// Check placeholder
		await expect(input.getAttribute('placeholder')).toBe('Enter text here');
	}}
/>

<Story
	name="Input no Label"
	args={{ id: 'input-no-label', value: '' }}
	play={async ({ canvas }) => {
		const input = canvas.getByLabelText('unlabeled, please report');

		// Check accessibility fallback
		await expect(input.getAttribute('aria-label')).toBe('unlabeled, please report');
	}}
/>

<Story
	name="Input Email Type"
	args={{ label: 'Email', type: 'email', id: 'input-email', value: 'test@example.com' }}
	play={async ({ canvas }) => {
		const input = canvas.getByRole('textbox', { name: 'Email' }) as HTMLInputElement;

		// Check type is email
		await expect(input.getAttribute('type')).toBe('email');
		await expect(input.value).toBe('test@example.com');
	}}
/>
