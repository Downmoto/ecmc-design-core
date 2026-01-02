<script lang="ts">
	import { cn } from '../../utils/cn.js';
	import type { ContainerProps } from './types.js';
	import { defaultProps, paddingClasses } from './constants.js';

	// Props with defaults
	let {
		children,
		padding = defaultProps.padding!,
		fill = defaultProps.fill!,
		metrics = $bindable(),
		bg = defaultProps.bg!,
		rounding = defaultProps.rounding!,
		...restProps
	}: ContainerProps = $props();

	let computedClasses = $derived(
		cn(
			'ecmc',
			'ecmc-container',
			paddingClasses[padding],
			fill ? 'container--fill' : '',
			bg ? 'container--bg' : '',
			rounding ? 'container--rounding' : ''
		)
	);

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
	.container--padding-none {
		padding: var(--ecmc-spacing-none);
	}

	.container--padding-xsm {
		padding: var(--ecmc-spacing-xsm);
	}

	.container--padding-sm {
		padding: var(--ecmc-spacing-sm);
	}

	.container--padding-md {
		padding: var(--ecmc-spacing-md);
	}

	.container--padding-lg {
		padding: var(--ecmc-spacing-lg);
	}

	.container--padding-xl {
		padding: var(--ecmc-spacing-xl);
	}

	.container--fill {
		height: 100%;
		width: 100%;
	}

	.container--bg {
		background-color: light-dark(var(--ecmc-neutral-200), var(--ecmc-neutral-800));
	}

	.container--rounding {
		border-radius: var(--ecmc-rounding-size-1);
	}
</style>
