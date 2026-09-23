<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} · PickTok</title>
</svelte:head>

<main class="container error">
	<p class="code">{page.status}</p>
	<h1>This page wandered off.</h1>
	<p><a href="/">Back to PickTok →</a></p>
</main>

<style>
	.error {
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 12px;
	}

	.code {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 72px;
		background: linear-gradient(92deg, var(--cyan), var(--pink));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	h1 {
		font-family: var(--font-display);
		font-size: 24px;
	}

	a {
		color: var(--cyan);
		text-decoration: none;
	}
</style>
