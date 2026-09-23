import type { Handle } from '@sveltejs/kit';

// Set <html lang> per locale (e.g. /ko/ or /tutorial/ko/organize/ -> lang="ko")
export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.params.locale ?? event.params.lang ?? 'en';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
