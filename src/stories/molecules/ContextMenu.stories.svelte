<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { ContextMenu, ContextMenuItem } from '$lib/index.js';

	const { Story } = defineMeta({
		component: ContextMenu,
		render: template
	});
</script>

{#snippet template(args: unknown)}
    <ContextMenu>
        <ContextMenuItem/>
        <ContextMenuItem/>
        <ContextMenuItem/>
        <ContextMenuItem/>
    </ContextMenu>
{/snippet}

<Story name="Context Menu"/>