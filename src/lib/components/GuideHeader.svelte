<script lang="ts">
	let { locale }: { locale: string } = $props();
</script>

<header class="container">
	<a href="/" class="brand">
		<img src="/images/app-icon.png" alt="" width="28" height="28" />
		<span>PickTok</span>
	</a>
	<a href="/tutorial/{locale}/" class="all">Guides</a>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 16px;
		padding-bottom: 8px;
		max-width: 680px;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 18px;
		text-decoration: none;
	}

	.brand img {
		border-radius: 7px;
	}

	.all {
		font-size: 14px;
		color: var(--text-dim);
		text-decoration: none;
	}
</style>
