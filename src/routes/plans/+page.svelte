<script>
	import { goto } from '$app/navigation';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import Plan from '$lib/components/Plan.svelte';
	import PlanToggle from '$lib/components/PlanToggle.svelte';
	import { planStore } from '$lib/stores/stores';

	$: monthly = $planStore.monthly;
	$: active = $planStore.active;
</script>

<div class="card">
	<div>
		<h1>Select your plan</h1>
		<p>You have the option of monthly or yearly billing.</p>
		<Plan
			on:click={() => ($planStore.active = 0)}
			title="Arcade"
			icon="images/icon-arcade.svg"
			{monthly}
			price={9}
			active={active === 0}
		/>
		<Plan
			on:click={() => ($planStore.active = 1)}
			title="Advanced"
			icon="images/icon-advanced.svg"
			{monthly}
			price={12}
			active={active === 1}
		/>
		<Plan
			on:click={() => ($planStore.active = 2)}
			title="Pro"
			icon="images/icon-pro.svg"
			{monthly}
			price={15}
			active={active === 2}
		/>
		<PlanToggle bind:monthly={$planStore.monthly} />
	</div>
</div>
<BottomNav next={() => goto('/addons')} back={() => goto('/')} />
