<script lang="ts">
	export let name: string;
	export let description: string;
	export let price: number;
	export let active: boolean;
</script>

<button on:click class="container" class:active>
	<span class="inner">
		<span class="check" class:active>
			{#if active}
				<img src="images/icon-checkmark.svg" alt="check mark" />
			{/if}
		</span>
		<span class="content">
			<span class="name">{name}</span>
			<span class="desc">{description}</span>
		</span></span
	>
	<span class="price">+${price}/yr</span>
</button>

<style>
	span {
		display: block;
	}

	.container {
		background-color: transparent;
		border-radius: 10px;
		padding: 1rem;
		text-align: start;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid var(--light-gray);
		cursor: pointer;
	}

	.container:not(:last-child) {
		margin-bottom: 1rem;
	}

	.container.active {
		border: 1px solid var(--purplish-blue);
		background-color: var(--alabaster);
	}

	.inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.price {
		color: var(--purplish-blue);
	}

	.name {
		color: var(--marine-blue);
		font-weight: 500;
	}

	.desc {
		color: var(--cool-gray);
	}

	.check {
		width: 25px;
		height: 25px;
		display: grid;
		place-items: center;
		border-radius: 5px;
		border: 1px solid var(--light-gray);
	}

	.check.active {
		background-color: var(--purplish-blue);
		border-color: transparent;
	}
</style>
