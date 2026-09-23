import content from './content.json';

export type Block =
	| { type: 'title' | 'text' | 'note'; html: string }
	| { type: 'image'; src: string }
	| { type: 'divider' };

export const locales = [
	{ code: 'en', name: 'English' },
	{ code: 'es', name: 'Español' },
	{ code: 'pt', name: 'Português' },
	{ code: 'fr', name: 'Français' },
	{ code: 'de', name: 'Deutsch' },
	{ code: 'it', name: 'Italiano' },
	{ code: 'ru', name: 'Русский' },
	{ code: 'zh-Hant', name: '繁體中文' },
	{ code: 'zh-Hans', name: '简体中文' },
	{ code: 'ja', name: '日本語' },
	{ code: 'th', name: 'ภาษาไทย' },
	{ code: 'vi', name: 'Tiếng Việt' },
	{ code: 'id', name: 'Bahasa Indonesia' },
	{ code: 'ko', name: '한국어' }
] as const;

/**
 * Slugs used in URLs: /tutorial/{locale}/{slug}/
 * The app's Firebase Realtime Database keys map to these:
 * organize -> organize, folder_list -> folders, subfolder -> subfolders, video_controls -> video-controls
 */
export const pages = ['organize', 'folders', 'subfolders', 'video-controls'] as const;

export type LocaleCode = (typeof locales)[number]['code'];
export type PageSlug = (typeof pages)[number];

const tutorials = content as Record<LocaleCode, Record<PageSlug, Block[]>>;

export function isLocale(code: string): code is LocaleCode {
	return locales.some((locale) => locale.code === code);
}

export function isPage(slug: string): slug is PageSlug {
	return (pages as readonly string[]).includes(slug);
}

export function blocksFor(locale: LocaleCode, page: PageSlug): Block[] {
	return tutorials[locale][page];
}

/** First title block of a guide, used for lists and <title> */
export function titleFor(locale: LocaleCode, page: PageSlug): string {
	const title = blocksFor(locale, page).find((block) => block.type === 'title');
	return title && 'html' in title ? title.html.replace(/<[^>]+>/g, '').trim() : page;
}

export function languageName(locale: LocaleCode): string {
	return locales.find((l) => l.code === locale)!.name;
}
