<script>
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';
	import { twitter, discord, github, shiftflow } from './SVGData';

	let isMobile = false;

	const handleResize = () => {
		isMobile = window.innerWidth <= 768; // Adjust the threshold as per your needs
	};

	onMount(() => {
		handleResize(); // Check the screen size initially

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	onMount(() => {
		// Smooth scrolling when clicking on anchor links
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				const href = this.getAttribute('href');
				if (window.location.pathname === '/' && href !== '/') {
					// Scroll to the section directly on the home page
					const section = document.querySelector(href);
					if (section) {
						section.scrollIntoView({
							behavior: 'smooth'
						});
					}
				} else {
					// Redirect to the desired section on other pages
					window.location.href = `/${href}`;
				}
			});
		});
	});
</script>

{#if isMobile}
	<nav class="mobile">
		<!-- Mobile navigation bar content -->
		<a href="/">Home</a>
		<a href="/edit">Try Now</a>
		<a href="#about">News/Updates</a>
		<a href="#contact">Contact</a>
		<a href="#feedback">Feedback</a>
	</nav>
{:else}
	<nav class="desktop">
		<a href="/">Home</a>
		<a href="/edit">Try Now</a>
		<a href="#about">News/Updates</a>
		<a href="#contact">Contact</a>
		<a href="#feedback">Feedback</a>
	</nav>
{/if}

<!-- <nav>
	<div class="logo">
		<Icon d={shiftflow} fill="red" />
		<p>Shift Flow</p>
	</div>
-->

<style>
	.mobile {
		/* Styles for mobile navigation bar */
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		/* ... */
	}

	.desktop {
		/* Styles for desktop navigation bar */
		display: flex;
		justify-content: space-around;
		position: fixed;
		top: 0;
		width: 100vw;
		/* ... */
	}

	/* 

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
	} */
</style>
