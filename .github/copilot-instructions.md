# ECMC Design Core - AI Coding Agent Instructions

## Project Overview

This is a **Svelte 5** component library providing atomic design system components (atoms and molecules). Built using SvelteKit for library packaging with Storybook integration for component development and testing.

## Architecture

### Component Structure Pattern

Components follow a consistent three-file pattern within `src/lib/atoms/`:

```
component-name/
  ├── ComponentName.svelte  # Main component implementation
  ├── types.d.ts            # TypeScript interfaces with JSDoc
  └── constants.ts          # Default props and class mappings
```

All components are re-exported through `src/lib/index.ts` as the library's public API.

### Svelte 5 Runes (Critical)

This project uses **Svelte 5's runes syntax** exclusively:

- `$props()` for component props (never `export let`)
- `$derived()` for computed values (instead of reactive `$:`)
- `$bindable()` for two-way binding (e.g., `metrics` prop in Container)
- `$effect()` for side effects (replaces `onMount` and reactive statements)
- `$state()` for local reactive state in stories

**Example from Button.svelte:**

```svelte
let { children, onclick, variant = defaultProps.variant! }: ButtonProps = $props();
let computedClasses = $derived(cn(buttonVariantClasses[variant]));
```

### Snippet-based Children

Components use Svelte 5's `Snippet` type for children, not slots:

```typescript
import type { Snippet } from 'svelte';

export interface ComponentProps {
	children?: Snippet;
}
```

**Rendering snippets:**

```svelte
{@render children?.()}
```

### CSS Design Tokens

All styling uses CSS custom properties defined in `src/lib/utils/ecmc.css`:

- **Spacing:** `--spacing-{none|xsm|sm|md|lg|xl}` (0rem to 3rem)
- **Colors:** `--neutral-{50|100|300|400|900|950}`, `--red-{500|600|700|900}`
- **Rounding:** `--rounding-size-{1|2}` (5px, 15px)

Components map props to these tokens via constants files. Example:

```typescript
export const paddingClasses = {
	none: 'container--padding-none',
	xsm: 'container--padding-xsm'
	// ...
} as const;
```

Corresponding CSS:

```css
.container--padding-xsm {
	padding: var(--spacing-xsm);
}
```

### Metrics System (Container)

The `Container` component exposes real-time DOM measurements via a `$bindable()` metrics prop:

```typescript
metrics = $bindable(); // Automatically updates on resize/scroll
```

This uses `ResizeObserver` and scroll listeners within `$effect()` to provide width, height, scroll positions, and offsets to parent components.

### Sub-Component Pattern

Container has specialized variants in `sub/` directory that wrap a shared `Box` component:

- `hbox.container.svelte` → `<Box variant="horizontal">`
- `vbox.container.svelte` → `<Box variant="vertical">`
- `centered.container.svelte`, `gridbox.container.svelte`

These are re-exported in `index.ts` alongside the base component.

## Development Workflow

### Commands

```bash
bun dev              # SvelteKit dev server
bun storybook        # Launch Storybook at http://localhost:6006
npm pack             # Build library (runs prepack automatically)
bun check            # Svelte type checking
bun lint             # ESLint + Prettier check
bun format           # Auto-format code
```

**Package manager:** Bun is the primary package manager (see `package.json` scripts).

### Storybook Testing Pattern

Stories use `@storybook/addon-svelte-csf` with inline interaction tests:

```svelte
<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	const { Story } = defineMeta({ component: Button, render: template });
</script>

<Story
	name="Button Primary"
	args={{ variant: 'primary' }}
	play={async ({ canvas, userEvent }) => {
		await userEvent.click(canvas.getByRole('button'));
		await expect(canvas.getByRole('button').innerText).toBe('Expected Text');
	}}
/>
```

Tests run via Vitest browser mode with Playwright (configured in `vite.config.ts`).

### TypeScript Conventions

- **JSDoc required:** All exported types/interfaces must have detailed JSDoc with `@example` blocks
- **Strict typing:** `@typescript-eslint/no-explicit-any` enforced; never use `any`
- **Type exports:** Export types alongside components from `index.ts`
- **Props interfaces:** Always extend base types when applicable (e.g., `BoxProps extends ContainerProps`)

### ESLint Configuration

Flat config format (`eslint.config.js`) with:

- Type-aware rules enabled for `.ts/.tsx` files via `projectService`
- Strict no-unsafe-\* rules for TypeScript
- `no-undef` disabled (TypeScript handles this)
- Svelte plugin with prettier integration

## Common Patterns

### Adding a New Component

1. Create folder: `src/lib/atoms/component-name/`
2. Add three files: `ComponentName.svelte`, `types.d.ts`, `constants.ts`
3. Export from `src/lib/index.ts`:
   ```typescript
   export { default as ComponentName } from './atoms/component-name/ComponentName.svelte';
   export type { ComponentNameProps } from './atoms/component-name/types.js';
   ```
4. Create story: `src/stories/ComponentName.stories.svelte`
5. Use `cn()` utility from `src/lib/utils/cn.ts` for conditional classes

### Class Name Management

Use the `cn()` utility for combining classes:

```typescript
let computedClasses = $derived(cn(baseClass, conditionalClass && 'active-class', anotherClass));
```

### Prop Defaults

Define defaults in `constants.ts`:

```typescript
export const defaultProps: Partial<ComponentProps> = {
	variant: 'primary'
} as const;
```

Apply in component:

```typescript
let { variant = defaultProps.variant! }: ComponentProps = $props();
```

## Build & Packaging

- **Adapter:** `svelte-adapter-bun` (configured in `svelte.config.js`)
- **Package output:** `dist/` directory via `svelte-package`
- **Entry points:** Single export in `package.json` pointing to `dist/index.js`
- **CSS bundling:** Side effects declared for `**/*.css` files
- **Pre-commit:** Husky + lint-staged runs prettier and eslint on staged files

## Key Files

- [src/lib/index.ts](src/lib/index.ts) - Library public API
- [src/lib/utils/ecmc.css](src/lib/utils/ecmc.css) - Design token definitions
- [src/lib/utils/cn.ts](src/lib/utils/cn.ts) - Class name utility
- [vite.config.ts](vite.config.ts) - Vitest + Storybook test configuration
- [svelte.config.js](svelte.config.js) - SvelteKit + adapter configuration
