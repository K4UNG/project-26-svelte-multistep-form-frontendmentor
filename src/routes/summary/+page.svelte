<script lang="ts">
	import { goto } from '$app/navigation';
	import { planStore, serviceStore } from '$lib/stores/stores';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import type { PageData } from './$types';

	const plans = ['Arcade', 'Advanced', 'Pro'];
	const prices = [9, 12, 15];

	const monthly = $planStore.monthly;
	const plan = monthly ? 'Monthly' : 'Yearly';
	const s_plan = monthly ? 'mo' : 'yr';

	export let data: PageData;

	const planPrice = prices[$planStore.active] * (monthly ? 1 : 10);
	const total =
		planPrice +
		$serviceStore.reduce((prev, curr) => data.services[curr].price / (monthly ? 10 : 1) + prev, 0);
</script>

<div>
	<h1>Finishing up</h1>
	<p>Double-check everything looks OK before confirming.</p>

	<div class="container">
		<div class="flex">
			<div class="title">
				{plans[$planStore.active]} ({plan})<br />
				<a href="/plans">Change</a>
			</div>
			<div class="blue title">${planPrice}/{s_plan}</div>
		</div>
		{#each $serviceStore as sr, i}
			<div class="flex" class:bt={i === 0}>
				<div class="gray">{data.services[sr].name}</div>
				<div class="blue">+${data.services[sr].price / (monthly ? 10 : 1)}/{s_plan}</div>
			</div>
		{/each}
	</div>
	<div class="total">
		<div>Total (per {monthly ? 'month' : 'year'})</div>
		<div>+${total}/{s_plan}</div>
	</div>
</div>

<BottomNav next={() => goto('/summary')} back={() => goto('/addons')} finish={true} />

<style>
	.container {
		background-color: var(--alabaster);
		padding: 1rem;
		border-radius: 5px;
	}

	.flex,
	.total {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.flex:not(:last-child) {
		margin-bottom: 1rem;
	}

	.bt {
		padding-top: 1rem;
		border-top: 1px solid var(--light-gray);
	}

	a {
		color: var(--cool-gray);
	}

	.gray {
		color: var(--cool-gray);
	}

	.blue {
		color: var(--marine-blue);
	}

	.title {
		color: var(--marine-blue);
		font-weight: 500;
	}

	.total {
		padding: 1.5rem 1rem 0;
	}

	.total > div:first-child {
		color: var(--cool-gray);
	}

	.total > div:last-child {
		color: var(--purplish-blue);
		font-weight: bold;
		font-size: 1.1rem;
	}
</style>
