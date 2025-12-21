// Reexport your entry components here
import ContainerBase from './atoms/container/container.svelte';
import HBox from './atoms/container/sub/hbox.container.svelte';
import VBox from './atoms/container/sub/vbox.container.svelte';
import GridBox from './atoms/container/sub/gridbox.container.svelte';
import Centered from './atoms/container/sub/centered.container.svelte';

// Create Container namespace with sub-components
export const Container = Object.assign(ContainerBase, {
	HBox,
	VBox,
	GridBox,
	Centered
});

export type { ContainerProps, ContainerMetrics } from './atoms/container/container.svelte.ts';

export { default as Text } from './atoms/text/text.svelte';
export type { TextProps } from './atoms/text/text.svelte.ts';
