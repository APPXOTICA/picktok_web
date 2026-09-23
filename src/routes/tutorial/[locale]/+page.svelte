<script lang="ts">
	import { languageName, locales, pages, titleFor } from '$lib/tutorials';
	import GuideHeader from '$lib/components/GuideHeader.svelte';

	let { data } = $props();

	const icons: Record<string, string> = {
		organize: '📥',
		folders: '🗂️',
		subfolders: '📂',
		'video-controls': '⏯️'
	};
</script>

<svelte:head>
	<title>PickTok Guides · {languageName(data.locale)}</title>
	<meta name="description" content="How to organize TikTok and YouTube Shorts videos with PickTok." />
	{#each locales as l (l.code)}
		<link rel="alternate" hreflang={l.code} href="/tutorial/{l.code}/" />
	{/each}
</svelte:head>

<GuideHeader locale={data.locale} />

<main class="container guide-index">
	<h1>PickTok Guides</h1>
	<ul class="cards">
		{#each pages as page (page)}
			<li>
				<a href="/tutorial/{data.locale}/{page}/">
					<span class="icon" aria-hidden="true">{icons[page]}</span>
					<span class="title">{titleFor(data.locale, page)}</span>
					<span class="arrow" aria-hidden="true">→</span>
				</a>
			</li>
		{/each}
	</ul>

	<nav class="languages" aria-label="Language">
		{#each locales as l (l.code)}
			<a href="/tutorial/{l.code}/" class:active={l.code === data.locale} lang={l.code}>{l.name}</a>
		{/each}
	</nav>
</main>

<style>
	.guide-index {
		max-width: 680px;
		padding-top: 24px;
		padding-bottom: 64px;
	}

	h1 {
		font-family: var(--font-display);
		font-size: clamp(28px, 6vw, 40px);
		letter-spacing: -0.02em;
		margin-bottom: 24px;
	}

	.cards {
		list-style: none;
		display: grid;
		gap: 12px;
	}

	.cards a {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 18px 20px;
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: 14px;
		text-decoration: none;
		transition:
			border-color 0.2s,
			transform 0.2s;
	}

	.cards a:hover {
		border-color: #3f3f46;
		transform: translateY(-1px);
	}

	.icon {
		font-size: 24px;
	}

	.title {
		flex: 1;
		font-weight: 600;
		font-size: 17px;
	}

	.arrow {
		color: var(--text-faint);
	}

	.languages {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 40px;
	}

	.languages a {
		font-size: 14px;
		padding: 6px 12px;
		border-radius: 999px;
		border: 1px solid var(--line);
		color: var(--text-dim);
		text-decoration: none;
	}

	.languages a.active {
		border-color: var(--cyan);
		color: var(--text);
	}
</style>
