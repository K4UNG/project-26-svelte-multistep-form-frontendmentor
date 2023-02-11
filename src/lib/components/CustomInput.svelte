<script lang="ts">
	export let label: string;
	export let placeholder: string;

	const id = label.replace(/ /g, '-');
</script>

<div>
	<label for={id}>{label}</label>
	<br />
	<input type="text" {placeholder} {id} />
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
		border: 1px solid var(--light-gray);
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
</style>
