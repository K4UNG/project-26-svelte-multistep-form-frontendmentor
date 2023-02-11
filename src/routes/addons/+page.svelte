<script lang="ts">
	import { goto } from '$app/navigation';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import Service from '$lib/components/Service.svelte';
	import { serviceStore } from '$lib/stores/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	function selectService(id: number) {
		serviceStore.update((prev) => {
			if (prev.includes(id)) {
				return prev.filter((item) => item !== id);
			}
			return [...prev, id];
		});
	}
</script>

<div>
	<h1>Pick add-ons</h1>
	<p>Add-ons helps enhance your gaming experience.</p>
	{#each data.services as service (service.id)}
		<Service
			on:click={() => selectService(service.id)}
			{...service}
			active={$serviceStore.includes(service.id)}
		/>
	{/each}
</div>

<BottomNav next={() => goto('/addons')} back={() => goto('/plans')} />
