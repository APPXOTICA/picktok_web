import { error } from '@sveltejs/kit';
import { isLocale, locales } from '$lib/tutorials';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => locales.map(({ code }) => ({ locale: code }));

export const load: PageLoad = ({ params }) => {
	if (!isLocale(params.locale)) error(404, 'Not found');
	return { locale: params.locale };
};
