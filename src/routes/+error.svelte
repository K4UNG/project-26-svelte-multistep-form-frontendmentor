<script lang="ts">
	import { page } from '$app/stores';
</script>

<div>
	<h1>{$page.status} | {$page.error?.message}</h1>
</div>

<style>
	div {
		display: grid;
		place-items: center;
		min-height: 50vh;
	}

	h1 {
		font-weight: 500;
	}
</style>
