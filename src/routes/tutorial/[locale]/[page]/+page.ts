import { error } from '@sveltejs/kit';
import { blocksFor, isLocale, isPage, locales, pages } from '$lib/tutorials';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () =>
	locales.flatMap(({ code }) => pages.map((page) => ({ locale: code, page })));

export const load: PageLoad = ({ params }) => {
	if (!isLocale(params.locale) || !isPage(params.page)) error(404, 'Not found');
	return {
		locale: params.locale,
		page: params.page,
		blocks: blocksFor(params.locale, params.page)
	};
};
