<script>
	import Button from '../lib/Button.svelte';
</script>

<div class="landingContainer">
	<div class="landingContent">
		<h2>Streamline your scheduling process!</h2>

		<p>
			Whether you're a scheduling app novice or a seasoned pro, brace yourself for an immersive
			experience with our mobile-friendly, state-of-the-art digital scheduling tool.
		</p>

		<div class="btnContainer">
			<Button label="Get Started!" onClick="window.location.href = '/edit';" />
			<Button label="Tutorial" onClick="window.location.href = '/edit:tutorial';" />
		</div>
	</div>

	<div class="landingGraphic" />
</div>

<div class="featuresBlock">
	<h2>Unlock your flow!</h2>

	<h3>No Logins or Accounts Required</h3>
	<p>
		Dive right into scheduling without the need for time-consuming registrations or logins. It's
		quick, easy, and hassle-free!
	</p>

	<h3>Effortless Data Import</h3>
	<p>
		We know that transitioning from other scheduling tools can be a daunting task. So say goodbye to
		manual data entry! We've included CSV and XLS import functionality and created automatic imports
		from some of the largest scheduling tools out there. Migrating your existing schedules to
		ShiftFlow is a breeze, saving you valuable time and effort.
	</p>

	<h3>Mobile-Optimized UI</h3>
	<p>
		Experience the freedom of mobile scheduling. Our mobile-optimized user interface and intuitive
		tools provide easy management of your schedules, no matter where you are. You can effortlessly
		maintain and edit your schedules from anywhere, anytime. Stay connected and in control, even
		when you're on the go.
	</p>

	<h3>AI-Powered Features</h3>
	<p>
		ShiftFlow incorporates artificial intelligence technology to enhance your scheduling experience.
		Try out our voice transcription feature, where you can speak your scheduling details, and the
		app will automatically create shifts based on your instructions. Even more AI tools to come!
	</p>

	<h3>Seamless Sharing</h3>
	<p>
		Sharing schedules has never been easier. Our demo version allows you to generate a unique URL
		for your schedule, which you can effortlessly share with anyone. Simply send the link, and they
		can instantly view your schedule.
	</p>
</div>

<style>
	.featuresBlock {
		text-align: center;
		width: 75vw;
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
