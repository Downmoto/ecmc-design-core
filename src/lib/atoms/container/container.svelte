<script lang="ts">
	import { cn } from '../../utils/cn.js';
	import type { ContainerProps } from './index.ts';
	import { defaultProps, paddingClasses } from './index.ts';

	// Props with defaults
	let {
		children,
		padding = defaultProps.padding!,
		metrics = $bindable(),
		...restProps
	}: ContainerProps = $props();

	let computedClasses = $derived(cn(paddingClasses[padding]));

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
		padding: var(--spacing-xsm);
	}

	.container--padding-sm {
		padding: var(--spacing-sm);
	}

	.container--padding-md {
		padding: var(--spacing-md);
	}

	.container--padding-lg {
		padding: var(--spacing-lg);
	}

	.container--padding-xl {
		padding: var(--spacing-xl);
	}
</style>
