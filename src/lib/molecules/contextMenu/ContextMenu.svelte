<script lang='ts'>
	import { VBox } from "$lib/index.js";
	import type { ContextMenuProps } from "./types.js";

    let { children, zone }: ContextMenuProps = $props()

</script>

<div class="extra-settings">
    <VBox bg fill padding='none' gap="xsm">
        {@render children?.()}
    </VBox>
</div>

<style>
    .extra-settings {
        user-select: none;
    }
</style>