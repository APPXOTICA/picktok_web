<script lang="ts">
	import { tutorialRedirectScript } from '$lib/landing/scripts';
</script>

<svelte:head>
	<title>PickTok Guides</title>
	<!-- Static host has no server-side language negotiation, so pick the guide language in the browser -->
	{@html tutorialRedirectScript}
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
