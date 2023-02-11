<script lang="ts">
	export let monthly: boolean;
</script>

<div class="container">
	<span class="text" class:active={monthly}>Monthly</span>
	<button class="toggle" on:click={() => (monthly = !monthly)}
		><span class:active={!monthly} /></button
	>
	<span class="text" class:active={!monthly}>Yearly</span>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		background-color: var(--alabaster);
		padding: 1rem;
		border-radius: 10px;
	}

	.text {
		font-weight: bold;
		color: var(--cool-gray);
	}

	.text.active {
		color: var(--marine-blue);
	}

	.toggle {
		width: 40px;
		background-color: var(--marine-blue);
		height: 20px;
		border: 0;
		border-radius: 10px;
		position: relative;
		cursor: pointer;
	}

	.toggle > span {
		position: absolute;
		width: 14px;
		height: 14px;
		background-color: white;
		border-radius: 50%;
		top: 50%;
		transform: translateY(-50%);
		left: 3px;
		transition: transform 200ms ease;
	}

	.toggle > span.active {
		transform: translate(20px, -50%);
	}
</style>
