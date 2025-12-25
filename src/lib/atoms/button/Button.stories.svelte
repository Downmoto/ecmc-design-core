<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	import type { ButtonProps } from './types.js';

	const { Story } = defineMeta({
		component: Button,
		render: template
	});
</script>

{#snippet template(args: ButtonProps)}
	<Button {...args}>Button Text</Button>
{/snippet}

<Story name="Button Primary" args={{ variant: 'primary' }} />
<Story name="Button Secondary" args={{ variant: 'secondary' }} />
<Story name="Button Disabled" args={{ variant: 'disabled' }} />
