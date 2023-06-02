<script>
	import Button from "../lib/Button.svelte";

</script>

<div class="landingContainer">
	<div class="landingContent">
		<h2>Streamline your scheduling process!</h2>

		<p>
			Whether you're a scheduling app novice or a seasoned pro, brace yourself for an immersive
			experience with our mobile-friendly, state-of-the-art digital scheduling tool.
		</p>

		<div class="btnContainer">
			<Button label="Get Started!" onClick="window.location.href = '/edit';"/>
			<Button label="Tutorial" onClick="window.location.href = '/edit:tutorial';"/>
		</div>
	</div>

	<div class="landingGraphic" />
</div>

<div>
	<h2>Unlock your flow!</h2>
	<p>
		Experience the convenience of managing your schedules effortlessly, without the hassle of
		logging in or creating accounts. Say goodbye to complex setups and hello to simplicity and
		efficiency. Sharing schedules has never been easier. With our demo version, you can effortlessly
		share schedules by simply encoding the data in a URL. Just send the link to anyone, and they can
		instantly view the schedule without any additional steps. Need a physical copy? No problem! Our
		app offers printable and downloadable versions for your convenience. We understand the
		importance of seamless integration with existing scheduling tools. That's why our demo version
		allows you to import schedules from CSV and XLS files, making setup a breeze. Say goodbye to
		manual data entry and save precious time. Experience the freedom of mobile scheduling. Our focus
		on mobile UI ensures that you can maintain and edit your schedules from anywhere, anytime. Stay
		connected and in control, even when you're on the go. Discover the power of AI in our demo
		version. Our cutting-edge features include voice transcription of shifts. Simply speak out what
		you'd like to schedule, and our AI-powered system will create a shift with those details.
		Embrace the future of scheduling with effortless voice commands.
	</p>
</div>

<div>
	<h2>Ready to revolutionize your scheduling process?</h2>
	<h3>Interactive Walkthrough</h3>
	<p>First time? Let our tutorial walk you through the steps!</p>
</div>

<div class="highlightSquare"></div>

<style>

	.highlightSquare {
		background-color: red;
		width: 60%;
		height: 70%;
		overflow: hidden;
		position: absolute;
		right: 0;
		top: 40%;
		rotate: 130deg;
		z-index: -1;
	}

	.landingContent {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 20vw;
	}

	.btnContainer {
		display: flex;
		justify-content: space-between;
	}

	.landingContainer {
		display: flex;
		justify-content: space-around;
		background-color: purple;
		padding: 20px;
		z-index: -2;
	}

	.landingGraphic {
		background-color: red;
		width: 18vw;
		height: 32vw;
		border-radius: 25px;
	}

</style>
