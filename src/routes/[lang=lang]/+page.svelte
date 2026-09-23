<script lang="ts">
	import Landing from '$lib/components/Landing.svelte';

	let { data } = $props();
</script>

<Landing locale={data.locale} />
