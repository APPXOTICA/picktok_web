import { locales, type LocaleCode } from '$lib/tutorials';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () =>
	locales.filter(({ code }) => code !== 'en').map(({ code }) => ({ lang: code }));

export const load: PageLoad = ({ params }) => ({ locale: params.lang as LocaleCode });
