<script lang="ts">
	import { cn } from '../../utils/cn.ts';
	import type { ContainerProps } from './container.svelte.ts';
	import { defaultProps, paddingClasses } from './container.svelte.ts';

	// Props with defaults
	let {
		children,
		class: className = '',
		padding = defaultProps.padding,
		metrics = $bindable(),
		...restProps
	}: ContainerProps = $props();

	let computedClasses = $derived(cn(className, padding ? paddingClasses[padding] : ''));

	// Container element reference
	let containerElement: HTMLDivElement;

	// Update metrics when element changes or on resize/scroll
	function updateMetrics() {
		if (!containerElement) return;

		const rect = containerElement.getBoundingClientRect();

		// Create a new metrics object to trigger reactivity
		metrics = {
			width: rect.width,
			height: rect.height,
			top: rect.top,
			left: rect.left,
			offsetTop: containerElement.offsetTop,
			offsetLeft: containerElement.offsetLeft,
			scrollWidth: containerElement.scrollWidth,
			scrollHeight: containerElement.scrollHeight,
			scrollTop: containerElement.scrollTop,
			scrollLeft: containerElement.scrollLeft,
			clientWidth: containerElement.clientWidth,
			clientHeight: containerElement.clientHeight
		};
	}

	// Initialize metrics when element is bound
	$effect(() => {
		if (containerElement) {
			updateMetrics();

			// Create ResizeObserver to track size changes
			const resizeObserver = new ResizeObserver(() => {
				updateMetrics();
			});

			resizeObserver.observe(containerElement);
			containerElement.addEventListener('scroll', updateMetrics);

			// Cleanup function
			return () => {
				resizeObserver.disconnect();
				containerElement.removeEventListener('scroll', updateMetrics);
			};
		}
		return () => {}; // Explicit return for when containerElement is not available
	});
</script>

<div bind:this={containerElement} class={computedClasses} {...restProps}>
	{@render children?.()}
</div>

<style>
	.container--padding-xsm {
		padding: 8px;
	}

	.container--padding-sm {
		padding: 16px;
	}

	.container--padding-md {
		padding: 24px;
	}

	.container--padding-lg {
		padding: 32px;
	}

	.container--padding-xl {
		padding: 64px;
	}
</style>
