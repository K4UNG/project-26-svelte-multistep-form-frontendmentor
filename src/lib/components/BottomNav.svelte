<script lang="ts">
	export let next: () => void;
	export let back: (() => void) | null = null;
	export let finish = false;
</script>

<div class="bottom">
	<button
		tabindex={back === null ? -1 : 0}
		class:hidden={back === null}
		class="back"
		on:click={back}>Go Back</button
	>
	<button class="next" on:click={next} class:finish>{finish ? 'Confirm' : 'Next Step'}</button>
</div>

<style>
	.bottom {
		background-color: white;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.next {
		border: 0;
		background-color: var(--marine-blue);
		color: white;
		padding: 0.8rem 1rem;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: 500;
	}

	.next.finish {
		background-color: var(--purplish-blue);
	}

	.back {
		border: 0;
		background-color: transparent;
		font-weight: 500;
		color: var(--cool-gray);
	}

	.back.hidden {
		opacity: 0;
		pointer-events: none;
	}
</style>
