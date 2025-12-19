/**
 * Simple class name concatenation utility
 * @param classes - Class names to concatenate (strings, undefined, or null)
 * @returns Merged class string
 */
export function cn(...classes: (string | undefined | null | boolean)[]): string {
	return classes
		.filter(Boolean)
		.join(' ')
		.trim();
}