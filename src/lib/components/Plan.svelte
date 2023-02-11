<script lang="ts">
	import { slide } from 'svelte/transition';

	export let title: string;
	export let price: number;
	export let monthly: boolean;
	export let icon: string;
	export let active: boolean;
</script>

<button
	on:click
	style:--border-color={active ? 'hsl(213, 96%, 18%)' : 'hsl(229, 24%, 87%)'}
	style:--bg={active ? 'hsl(231, 100%, 99%)' : 'transparent'}
>
	<img src={icon} alt={title} />
	<span class="content">
		<span class="title">{title}</span>
		<span class="price">${price * (monthly ? 1 : 10)}/{monthly ? 'mo' : 'yr'}</span>
		{#if !monthly}
			<span transition:slide={{ duration: 100 }} class="dis">2 months free</span>
		{/if}
	</span>
</button>

<style>
	button {
		display: flex;
		width: 100%;
		padding: 1rem;
		border: 1px solid var(--border-color);
		border-radius: 5px;
		text-align: start;
		gap: 1rem;
		background-color: var(--bg);
		margin-bottom: 1rem;
	}

	span {
		display: block;
	}

	.content > * + * {
		margin-top: 5px;
	}

	.title {
		font-weight: 500;
		color: var(--marine-blue);
		font-size: 1.2rem;
	}

	.price {
		color: var(--cool-gray);
	}

	.dis {
		color: var(--marine-blue);
	}
</style>
