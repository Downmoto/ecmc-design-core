import type { InputProps } from './types.js';

export const defaultProps: Partial<InputProps> = {
	type: 'text',
	labelLeft: false,
	label: '',
	placeholder: ''
} as const;
