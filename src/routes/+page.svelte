<script>
	import CustomInput from '../lib/components/CustomInput.svelte';
</script>

<div class="card">
	<div>
		<h1>Personal info</h1>
		<p>Please provide your name, email address, and phone number.</p>

		<CustomInput label="Name" placeholder="e.g. Stephen King" />
		<CustomInput label="Email Address" placeholder="e.g. Stephen King" />
		<CustomInput label="Phone Number" placeholder="e.g. Stephen King" />
	</div>
</div>

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
