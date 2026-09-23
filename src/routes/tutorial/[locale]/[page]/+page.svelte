<script lang="ts">
	import { languageName, locales, pages, titleFor, type Block } from '$lib/tutorials';

	let { data } = $props();

	const title = $derived(titleFor(data.locale, data.page));
	const firstImageIndex = $derived(data.blocks.findIndex((b: Block) => b.type === 'image'));

	// Notes were written as "# item<br><br># item" — show them as a list
	function noteItems(html: string): string[] {
		return html
			.split(/<br>\s*<br>/)
			.map((item) => item.replace(/^\s*#\s*/, '').trim())
			.filter(Boolean);
	}
</script>

<svelte:head>
	<title>{title} · PickTok</title>
	<meta name="description" content="{title} — PickTok guide ({languageName(data.locale)})" />
	{#each locales as l (l.code)}
		<link rel="alternate" hreflang={l.code} href="/tutorial/{l.code}/{data.page}/" />
	{/each}
</svelte:head>

<article class="guide">
	{#each data.blocks as block, i (i)}
		{#if block.type === 'title'}
			{#if i === 0}
				<h1>{@html block.html}</h1>
			{:else}
				<h2>{@html block.html}</h2>
			{/if}
		{:else if block.type === 'text'}
			<p>{@html block.html}</p>
		{:else if block.type === 'note'}
			<aside class="note">
				<ul>
					{#each noteItems(block.html) as item, j (j)}
						<li>{@html item}</li>
					{/each}
				</ul>
			</aside>
		{:else if block.type === 'image'}
			<figure class:still={block.src.endsWith('.jpg')}>
				<img
					src={block.src}
					alt=""
					width={block.src.endsWith('.jpg') ? 1170 : 480}
					height={block.src.endsWith('.jpg') ? 2380 : 980}
					loading={i === firstImageIndex ? 'eager' : 'lazy'}
					decoding="async"
				/>
			</figure>
		{:else if block.type === 'divider'}
			<hr />
		{/if}
	{/each}
</article>

<footer class="more">
	<p class="label">PickTok Guides</p>
	<ul>
		{#each pages.filter((p) => p !== data.page) as page (page)}
			<li><a href="/tutorial/{data.locale}/{page}/">{titleFor(data.locale, page)}</a></li>
		{/each}
	</ul>
</footer>

<style>
	.guide,
	.more {
		max-width: 640px;
		margin: 0 auto;
		padding: 28px 22px 8px;
	}

	h1,
	h2 {
		font-family: var(--font-display);
		font-weight: 700;
		letter-spacing: -0.015em;
		line-height: 1.25;
		text-align: center;
		text-wrap: balance;
	}

	h1 {
		font-size: clamp(26px, 7vw, 34px);
		margin: 8px 0 22px;
	}

	h2 {
		font-size: clamp(22px, 6vw, 28px);
		margin: 8px 0 18px;
	}

	p {
		font-size: 16.5px;
		line-height: 1.75;
		color: #e4e4e7;
		margin: 0 0 8px;
	}

	p :global(a),
	.note :global(a) {
		color: var(--cyan);
		text-underline-offset: 3px;
	}

	figure {
		margin: 22px auto 30px;
		max-width: 300px;
		border-radius: 26px;
		overflow: hidden;
		background: #000;
		border: 1px solid var(--line);
		box-shadow: 0 20px 50px -20px rgba(37, 244, 238, 0.18);
	}

	figure img {
		width: 100%;
		height: auto;
	}

	figure.still {
		max-width: 420px;
		border-radius: 16px;
	}

	.note {
		margin: 12px 0 24px;
		padding: 16px 18px;
		border-radius: 14px;
		background: rgba(255, 196, 0, 0.08);
		border: 1px solid rgba(255, 196, 0, 0.25);
		color: #ffe28a;
	}

	.note ul {
		list-style: none;
		display: grid;
		gap: 10px;
		font-size: 15px;
		line-height: 1.6;
	}

	.note li {
		position: relative;
		padding-left: 18px;
	}

	.note li::before {
		content: '';
		position: absolute;
		left: 2px;
		top: 0.65em;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--yellow);
	}

	hr {
		border: 0;
		height: 1px;
		background: var(--line);
		margin: 48px 0 40px;
	}

	.more {
		padding-top: 24px;
		padding-bottom: 56px;
		border-top: 1px solid var(--line);
		margin-top: 32px;
	}

	.more .label {
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--text-faint);
		margin-bottom: 10px;
	}

	.more ul {
		list-style: none;
		display: grid;
		gap: 6px;
	}

	.more a {
		color: var(--text-dim);
		text-decoration: none;
		font-size: 15px;
	}

	.more a:hover {
		color: var(--text);
	}
</style>
