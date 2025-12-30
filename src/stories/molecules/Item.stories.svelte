<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Item, VBox, Button, Kbd, type ItemProps, HBox, Centered } from '$lib/index.js';

	const { Story } = defineMeta({
		component: Item,
		render: template
	});
</script>

{#snippet template(args: ItemProps)}
	<div class="more" style="min-width: 300px;">
		<VBox gap="xsm">
			<Item {...args} />
			<Item {...args} />
		</VBox>
	</div>
{/snippet}

{#snippet action()}
	<Button>Press</Button>
{/snippet}

{#snippet action2()}
	<Centered padding="none">
		<HBox gap="none" padding="none">
			<Kbd>Ctrl</Kbd>
			<Kbd>Shift</Kbd>
			<Kbd>Y</Kbd>
		</HBox>
	</Centered>
{/snippet}

<Story name="Item" args={{ text: 'Text', subtitle: 'subtitle' }} />
<Story name="Item No Subtitle" args={{ text: 'Text', action: action2 }} />
<Story name="Item Action Button" args={{ text: 'Text', subtitle: 'subtitle', action }} />
<Story name="Item Action KBD" args={{ text: 'Text', subtitle: 'subtitle', action: action2 }} />
