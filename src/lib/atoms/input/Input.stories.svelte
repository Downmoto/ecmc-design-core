<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Input from './Input.svelte';
	import type { InputProps } from './types.js';

	const { Story } = defineMeta({
		component: Input,
		render: template
	});
</script>

{#snippet template(args: InputProps)}
	<Input {...args} />
{/snippet}

<Story name="Input" args={{ label: 'Label', id: 'input' }} />
<Story name="Input with value" args={{ label: 'Label', value: 'value', id: 'input-w-value' }} />
<Story name="Input Label Left" args={{ label: 'Label', labelLeft: true, id: 'input-label-left' }} />
<Story
	name="Input Placeholder"
	args={{ label: 'Label', placeholder: 'placeholder', id: 'input-placeholder' }}
/>
<Story name="Input no Label" args={{ id: 'input-no-label' }} />
