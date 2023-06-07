<script>
	import { onMount, onDestroy } from 'svelte';

	let activeCardIndex = 0;
	let timeoutId;
	export let delay;
	export let featureCards;

	function animationCounter() {
		if (activeCardIndex < featureCards.length - 1) {
			activeCardIndex++;
		} else {
			activeCardIndex = 0;
		}

		timeoutId = setTimeout(animationCounter, delay);
	}

	onMount(() => {
		timeoutId = setTimeout(animationCounter, delay);
	});

	onDestroy(() => {
		clearTimeout(timeoutId);
	});

	function pauseTimer() {
		clearTimeout(timeoutId);
	}

	function resumeTimer() {
		timeoutId = setTimeout(animationCounter, delay);
	}

	$: {
		let visibleCards = [];
		const positionAssignments = ['first', 'previous', 'current', 'next', 'last'];
		let startIndex = (activeCardIndex - 2 + featureCards.length) % featureCards.length;
		let endIndex = (activeCardIndex + 2) % featureCards.length;

		if (endIndex >= startIndex) {
			visibleCards = featureCards.slice(startIndex, endIndex + 1).map((card) => card.title);
		} else {
			visibleCards = featureCards
				.slice(startIndex)
				.concat(featureCards.slice(0, endIndex + 1))
				.map((card) => card.title);
		}

		featureCards.forEach((card) => (card.position = ''));
		visibleCards.forEach((thing, index) => {
			featureCards[featureCards.findIndex((element) => element.title === thing)].position =
				positionAssignments[index];
		});
	}
</script>

<div class="featuresBlock">
	<h2>Unlock your flow!</h2>

	<section class="featureCarousel">
		{#each featureCards as card, i}
			<div
				class="featureCard {card.position !== ''
					? 'position-' + card.position
					: ''} {activeCardIndex === i ? 'active' : ''}"
				on:click={() => (activeCardIndex = i)}
				on:mouseenter={pauseTimer}
				on:mouseleave={resumeTimer}
			>
				<div class="featureDesc">
					<h3>{card.title}</h3>
					<p>{card.info}</p>
				</div>
			</div>
		{/each}
	</section>

	<section class="indexBtns" on:mouseenter={pauseTimer} on:mouseleave={resumeTimer}>
		{#each featureCards as _, i}
			<div
				class="indexBtn"
				class:active={activeCardIndex === i}
				on:click={() => (activeCardIndex = i)}
			/>
		{/each}
	</section>
</div>

<style>
	:root {
		--primary: gray;
	}

	h2 {
		text-decoration: underline;
	}

	.featuresBlock {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.featureCarousel {
		width: 99%;
		display: flex;
		justify-content: center;
		padding: 10px;
	}

	.featureCard {
		display: flex;
		align-items: flex-end;
		text-align: center;
		overflow: hidden;
		width: 250px;
		height: 400px;
		border-radius: 16px;
		box-shadow: 1px 2px 8px black;
		position: absolute;
		transition: all 0.5s ease-in-out;
		border: solid 3px rgb(0, 0, 0, 0.2);
		background-color: var(--primary, black);
		cursor: pointer;
		z-index: 0;
		opacity: 0;
	}

	.featureCard:after {
		content: '';
		display: block;
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
		background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
	}

	.featureCard.position-first {
		z-index: 1;
		opacity: 0.7;
		filter: blur(2px);
		height: 350px;
		transform: translateX(-85%) translateY(15%) rotate(-5deg);
	}

	.featureCard.position-previous {
		z-index: 2;
		opacity: 0.95;
		transform: translateX(-60%) translateY(8%) rotate(-2deg);
	}

	.featureCard.position-current {
		cursor: default;
		width: 400px;
		height: 475px;
		z-index: 3;
		opacity: 1;
	}

	.featureCard.position-next {
		z-index: 2;
		opacity: 0.95;
		transform: translateX(60%) translateY(8%) rotate(2deg);
	}

	.featureCard.position-last {
		z-index: 1;
		opacity: 0.7;
		filter: blur(2px);
		height: 350px;
		transform: translateX(85%) translateY(15%) rotate(5deg);
	}

	.featureDesc {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 24px 12px;
		color: white;
		position: relative;
		z-index: 1;
		overflow: hidden;
		transform: translateY(100%);
		transition: all 1s ease-in-out;
		min-width: 350px;
	}

	.featureCard.active .featureDesc {
		transform: none;
	}

	.featureDesc p {
		opacity: 0;
		transition: opacity 0.2s ease-in;
	}

	.featureCard.active .featureDesc p {
		opacity: 1;
	}

	.indexBtns {
		display: flex;
		margin-top: 490px;
		padding: 0 10px;
		border-radius: 10px;
		border-bottom: 2px rgb(0, 0, 0, 0.25) solid;
		background-image: linear-gradient(rgb(0, 0, 0, 0) 60%, rgb(0, 0, 0, 0.08));
		box-shadow: 0 2px 3px rgb(0, 0, 0, 0.25);
	}

	.indexBtn {
		width: 10px;
		height: 10px;
		margin: 10px;
		border-radius: 25px;
		background-color: gray;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		box-shadow: 0 1px 1px;
	}

	.indexBtn.active {
		cursor: default;
		background-color: black;
		width: 20px;
		margin: 10px 5px;
	}
</style>
