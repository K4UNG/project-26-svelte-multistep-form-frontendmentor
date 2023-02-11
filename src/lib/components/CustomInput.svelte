<script lang="ts">
	import { slide } from 'svelte/transition';

	export let label: string;
	export let placeholder: string;
	export let value: string;
	export let error: string | null = null;

	const id = label.replace(/ /g, '-');
</script>

<div class="container">
	{#if error !== null}
		<span transition:slide={{ duration: 100 }} class="error">{error}</span>
	{/if}
	<label for={id}>{label}</label>
	<br />
	<input
		on:input={() => (error = null)}
		type="text"
		{placeholder}
		{id}
		bind:value
		style:--border-color={error === null ? 'hsl(229, 24%, 87%)' : 'hsl(354, 84%, 57%)'}
	/>
</div>

<style>
	label {
		color: var(--marine-blue);
		display: inline-block;
		margin-bottom: 3px;
	}

	input {
		width: 100%;
		padding: 0.8rem 0.5rem;
		border: 1px solid var(--border-color);
		border-radius: 5px;
		margin-bottom: 1rem;
	}

	div:last-child input {
		margin: 0;
	}

	input::placeholder {
		color: var(--cool-gray);
		font-weight: medium;
		font-size: 1rem;
	}

	input:focus {
		outline: 1px solid black;
	}

	.container {
		position: relative;
	}

	.error {
		position: absolute;
		right: 0;
		color: var(--strawberry-red);
		font-weight: 500;
	}
</style>
