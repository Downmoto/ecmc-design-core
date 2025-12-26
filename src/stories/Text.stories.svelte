<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Text } from '$lib/index.js';
	import type { TextProps } from '$lib/index.js';

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

<Story name="Text Headline" args={{ variant: 'headline', align: 'center' }} />
<Story name="Text Subtitle" args={{ variant: 'subtitle', align: 'center' }} />
<Story name="Text Body Plus" args={{ variant: 'bodyPlus', align: 'center' }} />
<Story name="Text Body" args={{ variant: 'body', align: 'center' }} />
<Story name="Text Italic" args={{ variant: 'body', italic: true, align: 'center' }} />
<Story name="Text Inline" args={{ variant: 'body', inline: true, align: 'center' }} />
<Story name="Text Center Aligned" args={{ variant: 'body', align: 'center' }} />
<Story name="Text Right Aligned" args={{ variant: 'body', align: 'right' }} />
