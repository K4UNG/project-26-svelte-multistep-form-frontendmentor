<script>
	import { goto } from '$app/navigation';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import Plan from '$lib/components/Plan.svelte';
	import PlanToggle from '$lib/components/PlanToggle.svelte';

	let active = 0;
	let monthly = true;
</script>

<div class="card">
	<div>
		<h1>Select your plan</h1>
		<p>You have the option of monthly or yearly billing.</p>
		<Plan
			on:click={() => (active = 0)}
			title="Arcade"
			icon="images/icon-arcade.svg"
			{monthly}
			price={9}
			active={active === 0}
		/>
		<Plan
			on:click={() => (active = 1)}
			title="Advanced"
			icon="images/icon-advanced.svg"
			{monthly}
			price={12}
			active={active === 1}
		/>
		<Plan
			title="Pro"
			icon="images/icon-pro.svg"
			{monthly}
			price={15}
			active={active === 2}
			on:click={() => (active = 2)}
		/>
		<PlanToggle bind:monthly />
	</div>
</div>
<BottomNav next={() => goto('/')} back={() => goto('/')} />

<style>
	h1 {
		font-size: 1.75rem;
		color: var(--marine-blue);
	}

	p {
		margin: 1rem 0;
		line-height: 170%;
		font-size: 1rem;
		color: var(--cool-gray);
	}
</style>
