export interface InputProps {
	type?: 'text' | 'email' | 'password';

	label?: string;

	labelLeft?: boolean;

	placeholder?: string;

	value: string;

	id?: string;
}
