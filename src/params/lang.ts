import type { ParamMatcher } from '@sveltejs/kit';
import { locales } from '$lib/tutorials';

// Non-English landing pages live at /{locale}/ (English is at /)
export const match: ParamMatcher = (param) =>
	param !== 'en' && locales.some((locale) => locale.code === param);
