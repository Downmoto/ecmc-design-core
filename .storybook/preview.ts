import type { Preview } from '@storybook/sveltekit';

import '$lib/utils/ecmc.css';

const preview: Preview = {
	tags: ['autodocs'],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo'
		},
		layout: 'centered'
	},
	globalTypes: {
		theme: {
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				title: 'Theme',
				items: ['light', 'dark'],
				dynamicTitle: true
			}
		}
	},
	decorators: [
		(story, context) => {
			const theme = (context.globals.theme as string) || 'light';

			document.documentElement.style.colorScheme = theme;

			document.body.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#ffffff';

			return story();
		}
	]
};

export default preview;
