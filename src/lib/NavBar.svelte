<script>
	export let links = [
		{ url: '/about', text: 'About' },
		{ url: '/feedback', text: 'Feedback' },
		{ url: '/contact', text: 'Contact' }
	];
	export let logoUrl = '';
</script>

<nav>
	<div class="logo">
		{#if logoUrl}
			<img src={logoUrl} alt="Logo" />
			<p>Shift Flow</p>
		{/if}
	</div>
	<ul>
		{#each links as link, index}
			<li class="nav-item nav-item-{index}" style="z-index:{5 - index}">
				<a href={link.url}>{link.text}</a>
			</li>
		{/each}
		<li class="demoBlock">
			<button>DEMO</button>
			<button>GitHub</button>
			<button>Discord</button>
			<button>Twitter</button>
		</li>
	</ul>
</nav>

<style>
	/* Color Palette	 */
	/* CSS HEX */
	/* --rich-black: #080B12ff;
  --bistre: #3B2C24ff;
  --caf-noir: #533B2Bff;
  --feldgrau: #536866ff;
  --myrtle-green: #4B827Dff;
  --caramel: #D98049ff;
  --silver: #C5C6C8ff;
  --eerie-black: #181D22ff; */

	.nav-item::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(215deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.2));
		z-index: 1;
		pointer-events: none;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.logo {
		margin-right: 10px;
	}

	img {
		height: 40px;
		width: auto;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		width: 70%;
	}

	li {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: 15px 15px;
		transform: skewX(-30deg);
	}

	.nav-item {
		width: 100px;
		box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
	}

	.demoBlock {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-left: -30px;
		z-index: 1;
		flex-grow: 1;
		transform: skewX(0);
		background-color: black;
	}

	.demoBlock button {
		margin-left: 35px;
	}

	a {
		text-decoration: none;
		color: #fff;
		transform: skewX(30deg);
		display: block;
	}

	/* Add custom styles for each nav item */
	.nav-item.nav-item-0 {
		background-color: #533b2bff;
	}

	.nav-item.nav-item-1 {
		background-color: #536866ff;
	}

	.nav-item.nav-item-2 {
		background-color: #4b827dff;
	}

	/* Add more custom styles for other nav items as needed */
</style>
