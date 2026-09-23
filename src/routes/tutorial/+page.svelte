<script lang="ts">
	import { locales } from '$lib/tutorials';

	// Static host has no server-side language negotiation, so pick the guide language in the browser
	const codes = JSON.stringify(locales.map((l) => l.code));
	const redirect = `<script>(function(){var c=${codes},m='en',p=navigator.languages||[navigator.language];for(var i=0;i<p.length;i++){var t=(p[i]||'').toLowerCase();if(t.indexOf('zh')===0){m=/hant|tw|hk|mo/.test(t)?'zh-Hant':'zh-Hans';break}var b=t.split('-')[0];if(c.indexOf(b)>-1){m=b;break}}location.replace('/tutorial/'+m+'/')})()</` + `script>`;
</script>

<svelte:head>
	<title>PickTok Guides</title>
	{@html redirect}
	<noscript><meta http-equiv="refresh" content="0; url=/tutorial/en/" /></noscript>
</svelte:head>

<p class="redirect"><a href="/tutorial/en/">PickTok Guides →</a></p>

<style>
	.redirect {
		padding: 40px 20px;
		text-align: center;
		color: var(--text-dim);
	}
</style>
