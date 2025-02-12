import {twMerge} from "tailwind-merge";

/**
 * Wrapper for `tailwind-merge`, used to merge classes.
 *
 * @since 0.1.0
 *
 * @param   args    Classes
 */
export function cx (...args: any[]): string { return twMerge(...args); }