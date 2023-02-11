<script lang="ts">
	import { page } from '$app/stores';

	let active = $page.url.pathname;
</script>

<div>
	<nav>
		<ul>
			<li>
				<div>
					<div class="num" class:active={active === '/'}>1</div>
				</div>
			</li>
			<li>
				<div>
					<div class="num">2</div>
				</div>
			</li>
			<li>
				<div>
					<div class="num">3</div>
				</div>
			</li>
			<li>
				<div>
					<div class="num">4</div>
				</div>
			</li>
		</ul>
	</nav>
	<slot />
	<div class="bottom">
		<button class="back hidden">Go Back</button>
		<button class="next">Next Step</button>
	</div>
</div>

<style>
	nav {
		background-image: url('images/bg-sidebar-mobile.svg');
		background-position: center;
		background-size: cover;
		padding: 2rem 0 6rem;
	}

	ul {
		list-style: none;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.num {
		border: 2px solid var(--light-blue);
		color: var(--light-blue);
		width: 40px;
		height: 40px;
		display: grid;
		place-items: center;
		border-radius: 50%;
		font-weight: bold;
	}

	.num.active {
		background-color: var(--light-blue);
		color: var(--marine-blue);
	}

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
