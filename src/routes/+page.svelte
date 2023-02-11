<script lang="ts">
	import { goto } from '$app/navigation';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import { isEmail, isPh, required } from '$lib/util';
	import CustomInput from '../lib/components/CustomInput.svelte';

	let name = '';
	let email = '';
	let ph = '';

	let nameErr: string | null = null;
	let emailErr: string | null = null;
	let phErr: string | null = null;

	function nextHandler() {
		nameErr = required(name);
		emailErr = isEmail(email);
		phErr = isPh(ph);

		if (!nameErr && !emailErr && !phErr) {
			goto('/plans');
		}
	}
</script>

<div class="card">
	<div>
		<h1>Personal info</h1>
		<p>Please provide your name, email address, and phone number.</p>

		<CustomInput
			label="Name"
			placeholder="e.g. Stephen King"
			bind:value={name}
			bind:error={nameErr}
		/>
		<CustomInput
			label="Email Address"
			placeholder="e.g. Stephen King"
			bind:value={email}
			bind:error={emailErr}
		/>
		<CustomInput
			label="Phone Number"
			placeholder="e.g. Stephen King"
			bind:value={ph}
			bind:error={phErr}
		/>
	</div>
</div>
<BottomNav next={nextHandler} />

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
