<script lang="ts">
	import { landing } from '$lib/landing/i18n';
	import { landingRedirectScript, languageMenuScript } from '$lib/landing/scripts';
	import { languageName, locales, type LocaleCode } from '$lib/tutorials';

	let { locale }: { locale: LocaleCode } = $props();

	const appStoreUrl = 'https://apps.apple.com/app/id1581603651';
	const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.appxotica.picktok';
	const siteUrl = 'https://www.picktok.love';

	const t = $derived(landing[locale]);
	const home = (code: LocaleCode) => (code === 'en' ? '/' : `/${code}/`);
	const guidesUrl = $derived(`/tutorial/${locale}/`);

	const featureIcons = ['folder', 'photo', 'grid', 'forward', 'lock', 'drag'];

	const thumbs = [
		['#ff9a8b', '#ff6a88'],
		['#7f7fd5', '#86a8e7'],
		['#f6d365', '#fda085'],
		['#43e97b', '#38f9d7'],
		['#a18cd1', '#fbc2eb'],
		['#30cfd0', '#330867'],
		['#fa709a', '#fee140'],
		['#5ee7df', '#b490ca'],
		['#f093fb', '#f5576c']
	];

	const folders = $derived([
		{ name: t.mock.seeAll, count: 30, color: 'var(--yellow)', filled: true },
		{ name: t.mock.names[0], count: 16, color: 'var(--blue)', filled: true },
		{ name: t.mock.names[1], count: 14, color: 'var(--yellow)', filled: false },
		{ name: t.mock.names[2], count: 9, color: 'var(--pink)', filled: true }
	]);
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<link rel="canonical" href="{siteUrl}{home(locale)}" />
	{#each locales as l (l.code)}
		<link rel="alternate" hreflang={l.code} href="{siteUrl}{home(l.code)}" />
	{/each}
	<link rel="alternate" hreflang="x-default" href="{siteUrl}/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{siteUrl}{home(locale)}" />
	<meta property="og:title" content={t.meta.ogTitle} />
	<meta property="og:description" content={t.meta.ogDescription} />
	<meta property="og:image" content="{siteUrl}/images/logo.png" />
	<meta name="twitter:card" content="summary" />
	<meta name="apple-itunes-app" content="app-id=1581603651" />
	{#if locale === 'en'}
		{@html landingRedirectScript}
	{/if}
	{@html languageMenuScript}
</svelte:head>

{#snippet storeButtons()}
	<div class="stores">
		<a class="store" href={appStoreUrl} target="_blank" rel="noopener">
			<svg viewBox="0 0 24 24" aria-hidden="true"
				><path
					fill="currentColor"
					d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.19-1.73-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.11 8.79.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.88.69 1.19-.02 1.94-1.08 2.66-2.14.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.3-.88-2.32-3.54zM14.2 6.13c.61-.74 1.02-1.76.91-2.78-.88.04-1.94.59-2.57 1.32-.56.65-1.06 1.69-.92 2.69.98.08 1.97-.5 2.58-1.23z"
				/></svg
			>
			<span><small>{t.store.appStore}</small>App Store</span>
		</a>
		<a class="store" href={playStoreUrl} target="_blank" rel="noopener">
			<svg viewBox="0 0 24 24" aria-hidden="true"
				><path fill="#25f4ee" d="M3.6 2.3 13.3 12l-9.7 9.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" /><path
					fill="#ffc400"
					d="m16.6 15.3-3.3-3.3 3.3-3.3 3.7 2.1c1 .6 1 1.8 0 2.4l-3.7 2.1z"
				/><path fill="#fe2c55" d="M16.6 15.3 13.3 12l-9.7 9.7c.4.2.9.2 1.4-.1l11.6-6.3z" /><path
					fill="#4c5fd5"
					d="M16.6 8.7 5 2.4c-.5-.3-1-.3-1.4-.1l9.7 9.7 3.3-3.3z"
				/></svg
			>
			<span><small>{t.store.googlePlay}</small>Google Play</span>
		</a>
	</div>
{/snippet}

<header class="nav container">
	<a href={home(locale)} class="brand">
		<img src="/images/app-icon.png" alt="" width="32" height="32" />
		<span>PickTok</span>
	</a>
	<nav>
		<a href="#features">{t.nav.features}</a>
		<a href={guidesUrl}>{t.nav.guides}</a>
		<details class="lang-menu">
			<summary aria-label={t.nav.language}>
				<svg viewBox="0 0 24 24" aria-hidden="true"
					><circle cx="12" cy="12" r="9" /><path
						d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"
					/></svg
				>
				<span class="current">{languageName(locale)}</span>
			</summary>
			<ul>
				{#each locales as l (l.code)}
					<li>
						<a
							href={home(l.code)}
							hreflang={l.code}
							lang={l.code}
							data-lang={l.code}
							class:active={l.code === locale}>{l.name}</a
						>
					</li>
				{/each}
			</ul>
		</details>
		<a href={appStoreUrl} class="nav-cta" target="_blank" rel="noopener">{t.nav.getApp}</a>
	</nav>
</header>

<main>
	<section class="hero container">
		<div class="hero-copy">
			<p class="eyebrow"><span class="dot"></span>{t.hero.eyebrow}</p>
			<h1>{t.hero.titleA} <span class="accent">{t.hero.titleB}</span></h1>
			<p class="lede">{t.hero.lede}</p>
			{@render storeButtons()}
			<p class="fine">{t.hero.fine}</p>
		</div>

		<div class="phone-wrap" aria-hidden="true">
			<div class="glow cyan"></div>
			<div class="glow pink"></div>
			<div class="phone">
				<div class="screen">
					<div class="appbar">
						<span class="back">‹</span>
						<span class="appbar-title">{t.mock.seeAll}</span>
					</div>
					<div class="grid">
						{#each thumbs as [a, b], i (i)}
							<div class="thumb" style="--a:{a};--b:{b};--d:{i * 0.12}s">
								<span class="play"></span>
							</div>
						{/each}
					</div>
					<div class="folders">
						<span class="folders-label">{t.mock.folders}</span>
						<div class="folder-row">
							{#each folders as f, i (i)}
								<div class="folder">
									<svg viewBox="0 0 48 38">
										<path
											d="M3 6a4 4 0 0 1 4-4h11l4 5h19a4 4 0 0 1 4 4v21a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"
											fill={f.filled ? f.color : 'none'}
											stroke={f.color}
											stroke-width="3"
										/>
									</svg>
									<b style="color:{f.filled ? '#111' : f.color}">{f.count}</b>
									<span>{f.name}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="how container" aria-labelledby="how-title">
		<h2 id="how-title">{t.how.title}</h2>
		<ol class="steps">
			{#each t.how.steps as step, i (i)}
				<li>
					<span class="num">{i + 1}</span>
					<h3>{step.title}</h3>
					<p>{step.body}</p>
				</li>
			{/each}
		</ol>
	</section>

	<section id="features" class="features container" aria-labelledby="features-title">
		<p class="section-eyebrow">{t.features.eyebrow}</p>
		<h2 id="features-title">{t.features.title}</h2>
		<div class="feature-grid">
			{#each t.features.items as f, i (i)}
				<article class="feature">
					<span class="ficon">
						<svg viewBox="0 0 24 24" aria-hidden="true">
							{#if featureIcons[i] === 'folder'}
								<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
							{:else if featureIcons[i] === 'photo'}
								<rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9.5" r="1.5" /><path
									d="m21 16-5-5-8 8"
								/>
							{:else if featureIcons[i] === 'grid'}
								<rect x="3" y="3" width="8" height="8" rx="1.5" /><rect
									x="13"
									y="3"
									width="8"
									height="8"
									rx="1.5"
								/><rect x="3" y="13" width="8" height="8" rx="1.5" /><rect
									x="13"
									y="13"
									width="8"
									height="8"
									rx="1.5"
								/>
							{:else if featureIcons[i] === 'forward'}
								<path d="M4 6v12l8-6zM12 6v12l8-6z" />
							{:else if featureIcons[i] === 'lock'}
								<rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
							{:else}
								<path d="M5 9h14M5 15h14M9 5l-4 4 4 4M15 11l4 4-4 4" />
							{/if}
						</svg>
					</span>
					<h3>{f.title}</h3>
					<p>{f.body}</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="pricing container" aria-labelledby="pricing-title">
		<h2 id="pricing-title">{t.pricing.title}</h2>
		<div class="plans">
			<div class="plan">
				<p class="plan-name">{t.pricing.free}</p>
				<p class="plan-big">40 <span>{t.pricing.videos}</span></p>
				<ul>
					{#each t.pricing.freeItems as item, i (i)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
			<div class="plan premium">
				<p class="plan-name">{t.pricing.premium}</p>
				<p class="plan-big">{t.pricing.unlimited}</p>
				<ul>
					{#each t.pricing.premiumItems as item, i (i)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<section class="cta container">
		<div class="cta-card">
			<img src="/images/app-icon.png" alt="" width="72" height="72" />
			<h2>{t.cta.title}</h2>
			{@render storeButtons()}
			<p class="guides-link">{t.cta.newHere} <a href={guidesUrl}>{t.cta.guidesLink}</a></p>
		</div>
	</section>
</main>

<footer class="site-footer container">
	<div class="brand small">
		<img src="/images/app-icon.png" alt="" width="22" height="22" />
		<span>PickTok</span>
	</div>
	<nav>
		<a href={guidesUrl}>{t.footer.guides}</a>
		<a href="mailto:vincent@appxotica.com">{t.footer.contact}</a>
	</nav>
</footer>

<style>
	/* ---------- nav ---------- */
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 18px;
		padding-bottom: 18px;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 20px;
		text-decoration: none;
	}

	.brand img {
		border-radius: 8px;
	}

	.nav nav {
		display: flex;
		align-items: center;
		gap: 24px;
		font-size: 15px;
	}

	.nav nav a {
		color: var(--text-dim);
		text-decoration: none;
	}

	.nav nav a:hover {
		color: var(--text);
	}

	.nav .nav-cta {
		color: #111;
		background: var(--text);
		padding: 8px 16px;
		border-radius: 999px;
		font-weight: 600;
	}

	.nav .nav-cta:hover {
		color: #111;
	}

	/* ---------- language menu ---------- */
	.lang-menu {
		position: relative;
	}

	.lang-menu summary {
		display: flex;
		align-items: center;
		gap: 6px;
		list-style: none;
		cursor: pointer;
		color: var(--text-dim);
		font-size: 15px;
		padding: 6px 10px;
		border: 1px solid var(--line);
		border-radius: 999px;
		user-select: none;
	}

	.lang-menu summary::-webkit-details-marker {
		display: none;
	}

	.lang-menu summary:hover,
	.lang-menu[open] summary {
		color: var(--text);
		border-color: #3f3f46;
	}

	.lang-menu summary svg {
		width: 16px;
		height: 16px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.6;
	}

	.lang-menu ul {
		position: absolute;
		right: 0;
		top: calc(100% + 8px);
		z-index: 20;
		list-style: none;
		min-width: 190px;
		max-height: min(70vh, 520px);
		overflow-y: auto;
		padding: 6px;
		background: var(--surface-2);
		border: 1px solid var(--line);
		border-radius: 14px;
		box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.7);
	}

	.lang-menu li a {
		display: block;
		padding: 9px 12px;
		border-radius: 9px;
		font-size: 15px;
		color: var(--text-dim);
		text-decoration: none;
	}

	.lang-menu li a:hover {
		background: var(--surface);
		color: var(--text);
	}

	.lang-menu li a.active {
		color: var(--text);
		background: rgba(37, 244, 238, 0.1);
	}

	/* ---------- hero ---------- */
	.hero {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		align-items: center;
		gap: 48px;
		padding-top: 48px;
		padding-bottom: 96px;
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 14px;
		color: var(--text-dim);
		border: 1px solid var(--line);
		border-radius: 999px;
		padding: 6px 14px;
		margin-bottom: 24px;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--cyan);
		box-shadow: 4px 0 0 var(--pink);
		margin-right: 4px;
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: clamp(40px, 6.4vw, 72px);
		line-height: 1.02;
		letter-spacing: -0.035em;
		margin-bottom: 22px;
	}

	.accent {
		background: linear-gradient(92deg, var(--cyan) 10%, #fff 50%, var(--pink) 90%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.lede {
		font-size: clamp(17px, 2vw, 19px);
		color: var(--text-dim);
		max-width: 520px;
		margin-bottom: 32px;
	}

	.stores {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.store {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 10px 20px 10px 16px;
		background: #000;
		border: 1px solid #3f3f46;
		border-radius: 14px;
		text-decoration: none;
		transition:
			border-color 0.2s,
			transform 0.2s;
	}

	.store:hover {
		border-color: #71717a;
		transform: translateY(-2px);
	}

	.store svg {
		width: 26px;
		height: 26px;
	}

	.store span {
		display: flex;
		flex-direction: column;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 19px;
		line-height: 1.1;
	}

	.store small {
		font-family: var(--font-body);
		font-weight: 400;
		font-size: 11px;
		color: var(--text-dim);
	}

	.fine {
		margin-top: 16px;
		font-size: 14px;
		color: var(--text-faint);
	}

	/* ---------- phone mock ---------- */
	.phone-wrap {
		position: relative;
		display: flex;
		justify-content: center;
	}

	.glow {
		position: absolute;
		width: 260px;
		height: 260px;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.45;
	}

	.glow.cyan {
		background: var(--cyan);
		top: 10%;
		left: 8%;
	}

	.glow.pink {
		background: var(--pink);
		bottom: 8%;
		right: 6%;
	}

	.phone {
		position: relative;
		width: min(320px, 78vw);
		aspect-ratio: 9 / 19;
		border-radius: 46px;
		padding: 10px;
		background: #1b1b1e;
		border: 1px solid #333;
		box-shadow:
			0 40px 80px -30px rgba(0, 0, 0, 0.9),
			inset 0 0 0 2px #0a0a0a;
		transform: rotate(-3deg);
	}

	.screen {
		height: 100%;
		border-radius: 37px;
		overflow: hidden;
		background: #111;
		display: flex;
		flex-direction: column;
	}

	.appbar {
		background: var(--yellow);
		color: #fff;
		padding: 38px 16px 12px;
		display: flex;
		align-items: center;
		gap: 14px;
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 20px;
	}

	.back {
		font-size: 28px;
		line-height: 1;
	}

	.grid {
		flex: 1;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 1fr;
		gap: 2px;
		padding: 2px;
	}

	.thumb {
		position: relative;
		background: linear-gradient(160deg, var(--a), var(--b));
		animation: pop 0.6s ease-out both;
		animation-delay: var(--d);
	}

	.thumb::after {
		content: '';
		position: absolute;
		left: 8%;
		right: 30%;
		bottom: 10%;
		height: 6px;
		border-radius: 3px;
		background: rgba(255, 255, 255, 0.55);
	}

	.play {
		position: absolute;
		top: 8px;
		left: 8px;
		width: 14px;
		height: 11px;
		border-radius: 3px;
		background: rgba(17, 17, 17, 0.45);
	}

	@keyframes pop {
		from {
			opacity: 0;
			transform: scale(0.85);
		}
	}

	.folders {
		background: #161616;
		padding: 8px 10px 18px;
		text-align: center;
	}

	.folders-label {
		display: inline-block;
		font-size: 8px;
		letter-spacing: 0.3em;
		color: #888;
		border: 1px solid #444;
		border-radius: 4px;
		padding: 1px 6px;
		margin-bottom: 8px;
	}

	.folder-row {
		display: flex;
		justify-content: space-around;
	}

	.folder {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 22%;
	}

	.folder svg {
		width: 100%;
	}

	.folder b {
		position: absolute;
		top: 11%;
		font-size: 13px;
		font-weight: 600;
	}

	.folder span {
		font-size: 11px;
		color: #ddd;
		margin-top: 2px;
	}

	/* ---------- sections ---------- */
	section h2 {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(28px, 4vw, 44px);
		letter-spacing: -0.025em;
		line-height: 1.12;
		max-width: 720px;
	}

	.section-eyebrow {
		color: var(--cyan);
		font-weight: 600;
		font-size: 14px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin-bottom: 12px;
	}

	.how {
		padding-top: 40px;
		padding-bottom: 96px;
	}

	.steps {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin-top: 40px;
		counter-reset: step;
	}

	.steps li {
		position: relative;
		padding: 28px 24px;
		border-radius: var(--radius);
		background: var(--surface);
		border: 1px solid var(--line);
	}

	.num {
		display: inline-grid;
		place-items: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		font-family: var(--font-display);
		font-weight: 700;
		color: #111;
		background: linear-gradient(135deg, var(--cyan), #fff);
		margin-bottom: 18px;
	}

	.steps li:nth-child(2) .num {
		background: linear-gradient(135deg, #fff, var(--pink));
	}

	.steps li:nth-child(3) .num {
		background: var(--yellow);
	}

	h3 {
		font-family: var(--font-display);
		font-size: 21px;
		font-weight: 600;
		margin-bottom: 8px;
	}

	.steps p,
	.feature p {
		color: var(--text-dim);
		font-size: 15.5px;
	}

	.features {
		padding-top: 24px;
		padding-bottom: 96px;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		margin-top: 40px;
		background: var(--line);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
	}

	.feature {
		background: var(--bg);
		padding: 32px 28px;
	}

	.ficon {
		display: inline-grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: var(--surface-2);
		border: 1px solid var(--line);
		margin-bottom: 18px;
	}

	.ficon svg {
		width: 22px;
		height: 22px;
		fill: none;
		stroke: var(--cyan);
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.feature:nth-child(even) .ficon svg {
		stroke: var(--pink);
	}

	/* ---------- pricing ---------- */
	.pricing {
		padding-bottom: 96px;
	}

	.plans {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
		margin-top: 40px;
		max-width: 820px;
	}

	.plan {
		padding: 32px 28px;
		border-radius: var(--radius);
		background: var(--surface);
		border: 1px solid var(--line);
	}

	.plan.premium {
		background:
			linear-gradient(var(--surface), var(--surface)) padding-box,
			linear-gradient(135deg, var(--cyan), var(--pink)) border-box;
		border: 1px solid transparent;
	}

	.plan-name {
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-dim);
	}

	.plan-big {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 44px;
		letter-spacing: -0.03em;
		margin: 6px 0 18px;
	}

	.plan-big span {
		font-size: 20px;
		font-weight: 500;
		color: var(--text-dim);
		letter-spacing: 0;
	}

	.plan ul {
		list-style: none;
		display: grid;
		gap: 10px;
		color: var(--text-dim);
		font-size: 15.5px;
	}

	.plan li::before {
		content: '✓';
		color: var(--cyan);
		font-weight: 700;
		margin-right: 10px;
	}

	.premium li::before {
		color: var(--pink);
	}

	/* ---------- CTA ---------- */
	.cta {
		padding-bottom: 80px;
	}

	.cta-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 20px;
		padding: 64px 24px;
		border-radius: 28px;
		background:
			radial-gradient(600px 240px at 20% 0%, rgba(37, 244, 238, 0.14), transparent 70%),
			radial-gradient(600px 240px at 80% 100%, rgba(254, 44, 85, 0.14), transparent 70%),
			var(--surface);
		border: 1px solid var(--line);
	}

	.cta-card img {
		border-radius: 18px;
	}

	.cta-card .stores {
		justify-content: center;
	}

	.guides-link {
		color: var(--text-dim);
		font-size: 15px;
	}

	.guides-link a {
		color: var(--cyan);
		text-decoration: none;
	}

	/* ---------- footer ---------- */
	.site-footer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px 32px;
		padding-top: 28px;
		padding-bottom: 40px;
		border-top: 1px solid var(--line);
		font-size: 14px;
		color: var(--text-faint);
	}

	.brand.small {
		font-size: 16px;
		color: var(--text);
	}

	.brand.small img {
		border-radius: 6px;
	}

	.site-footer nav {
		display: flex;
		gap: 20px;
	}

	.site-footer nav a {
		color: var(--text-dim);
		text-decoration: none;
	}

	/* ---------- responsive ---------- */
	@media (max-width: 880px) {
		.hero {
			grid-template-columns: 1fr;
			padding-top: 24px;
			padding-bottom: 72px;
			gap: 56px;
		}

		.steps,
		.feature-grid {
			grid-template-columns: 1fr 1fr;
		}

		.plans {
			grid-template-columns: 1fr;
			margin-left: auto;
			margin-right: auto;
		}

		/* Stacked layout: center everything */
		.hero-copy,
		.how,
		.features,
		.pricing {
			text-align: center;
		}

		.lede,
		section h2 {
			margin-left: auto;
			margin-right: auto;
		}

		.stores {
			justify-content: center;
		}

		.plan ul {
			justify-items: center;
		}

		.site-footer {
			flex-direction: column;
			justify-content: center;
		}
	}

	@media (max-width: 600px) {
		.nav nav a:not(.nav-cta) {
			display: none;
		}

		.lang-menu .current {
			display: none;
		}

		.steps,
		.feature-grid {
			grid-template-columns: 1fr;
		}

		.feature {
			padding: 26px 22px;
		}
	}
</style>
