<!--
	@component
	# Container
	
	A flexible container component with real-time DOM metrics tracking and extensive styling options.
	
	@param {Snippet} [children] - The content to be rendered inside the container
	@param {'none' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl'} [padding='none'] - Padding size mapped to CSS --spacing-* variables
	@param {boolean} [fill=false] - Whether to make the container fill its parent dimensions (sets width and height to 100%)
	@param {boolean} [bg=false] - Whether to apply a background color (neutral-200 in light mode, neutral-800 in dark mode)
	@param {boolean} [rounding=false] - Whether to apply border radius using var(--rounding-size-1) which is 5px
	@param {ContainerMetrics} [metrics] - Bindable prop to track real-time container element metrics (dimensions, position, scroll state)
-->
<script lang="ts">
	import { cn } from '../../utils/cn.js';
	import { defaultProps, paddingClasses } from './constants.js';
	import type { ContainerProps } from './types.js';

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
