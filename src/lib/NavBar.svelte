<script>
	import Icon from './Icon.svelte';
	import { twitter, discord, github, shiftflow } from './SVGData';

	let isExpanded;

	function toggleExpand() {
		isExpanded = !isExpanded;
	}
</script>

<nav>
	<div class="logo">
		<Icon d={shiftflow} fill="red" />
		<p>Shift Flow</p>
	</div>

	{#if !isExpanded}
		<div class="navbarMini" on:click={toggleExpand}>
			<span>Menu</span>
		</div>
	{/if}

	{#if isExpanded}
		<div class="navbarExpanded">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/edit">Try Now</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/feedback">Feedback</a></li>
				<li class="communityLinks">
					<Icon d={twitter} fill="red" />
					<Icon d={discord} fill="red" />
					<Icon d={github} fill="red" />
				</li>
			</ul>
		</div>
	{/if}
</nav>

<style>
	nav {
		background-color: gray;
	}

	ul {
		list-style-type: none;
	}

	.navbarMini {
		font-size: 1.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 20px;
		right: 0;
		background-color: lightblue;
		min-width: 100px;
		min-height: 45px;
		border-radius: 10px 0 0 10px;
		box-shadow: 3px 3px black;
	}

	.navbarMini:hover {
		background-color: red;
	}

	.navbarExpanded {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: space-between;
		position: absolute;
		top: 20px;
		right: 0;
		background-color: lightblue;
		min-width: 85vw;
		min-height: 85vh;
	}
</style>
