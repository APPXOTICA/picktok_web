import type { Handle } from '@sveltejs/kit';

// Set <html lang> per tutorial locale (e.g. /tutorial/ko/organize/ -> lang="ko")
export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.params.locale ?? 'en';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
