<script lang="ts">
	import { page } from '$app/stores';

	$: active = $page.url.pathname;
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
					<div class="num" class:active={active === '/plans'}>2</div>
				</div>
			</li>
			<li>
				<div>
					<div class="num" class:active={active === '/addons'}>3</div>
				</div>
			</li>
			<li>
				<div>
					<div class="num" class:active={active === '/summary'}>4</div>
				</div>
			</li>
		</ul>
	</nav>
	<slot />
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
		transition: background-color 200ms ease, color 200ms ease;
	}

	.num.active {
		background-color: var(--light-blue);
		color: var(--marine-blue);
	}
</style>
