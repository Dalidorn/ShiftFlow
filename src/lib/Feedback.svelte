<script>
	import reportData from './DiscordReporting';

	let recommendApp = '';
	let displayFeedbackPublicly = '';
	let displayReview = false;
	let displayFeatureRequest = false;
	let displayOpenEndedFeedback = false;
	let displayQuestions = false;

	function handleRecommendApp(event) {
		recommendApp = event.target.value;
	}

	function handleDisplayFeedbackPublicly(event) {
		displayFeedbackPublicly = event.target.value;
	}

	function handleDisplayOption(option) {
		switch (option) {
			case 'review':
				displayReview = !displayReview;
				break;
			case 'featureRequest':
				displayFeatureRequest = !displayFeatureRequest;
				break;
			case 'openEndedFeedback':
				displayOpenEndedFeedback = !displayOpenEndedFeedback;
				break;
			case 'questions':
				displayQuestions = !displayQuestions;
				break;
		}
	}

	function handleSubmit(event) {
		event.preventDefault();

		let name = document.querySelector('#name').value | 'Annon';
		let email = document.querySelector('#email').value | 'Not Provided';

		if (displayReview) {
			let review = {
				type: 'Review',
				report: `Name: ${name}
Email: ${email}
`
			};

			reportData(review);
		}

		if (displayFeatureRequest) {
			let request = {
				type: 'FeatureRequest',
				report: `Name: ${name}
Email: ${email}
`
			};

			reportData(request);
		}

		if (displayOpenEndedFeedback) {
			let feedback = {
				type: 'Feedback',
				report: `Name: ${name}
Email: ${email}
`
			};

			reportData(feedback);
		}

		if (displayQuestions) {
			let question = {
				type: 'Question',
				report: `Name: ${name}
Email: ${email}
`
			};

			reportData(question);
		}
	}
</script>

<form id="feedback" class="feedback-form">
	<h2>Feedback Form</h2>

	<label>
		Name:
		<input id="name" type="text" placeholder="Your name" />
	</label>

	<label>
		Email:
		<input id="email" type="email" placeholder="Your email" />
	</label>

	<div class="checkbox-group">
		<p>Would you recommend the app?</p>
		<label>
			<input type="radio" value="yes" bind:group={recommendApp} on:change={handleRecommendApp} />
			Yes
		</label>
		<label>
			<input type="radio" value="no" bind:group={recommendApp} on:change={handleRecommendApp} />
			No
		</label>
	</div>

	<div class="checkbox-group">
		<p>Can we display this feedback publicly?</p>
		<label>
			<input
				type="radio"
				value="yes"
				bind:group={displayFeedbackPublicly}
				on:change={handleDisplayFeedbackPublicly}
			/>
			Yes
		</label>
		<label>
			<input
				type="radio"
				value="no"
				bind:group={displayFeedbackPublicly}
				on:change={handleDisplayFeedbackPublicly}
			/>
			No
		</label>
	</div>

	<div>
		<p>Select the feedback you'd like to provide:</p>
		<label>
			<input type="checkbox" on:change={() => handleDisplayOption('review')} />
			Review
		</label>
		<label>
			<input type="checkbox" on:change={() => handleDisplayOption('featureRequest')} />
			Feature Request
		</label>
		<label>
			<input type="checkbox" on:change={() => handleDisplayOption('openEndedFeedback')} />
			Open-ended Feedback
		</label>
		<label>
			<input type="checkbox" on:change={() => handleDisplayOption('questions')} />
			Questions
		</label>
	</div>

	<!-- Display Review -->
	{#if displayReview}
		<fieldset class="rating">
			<input type="radio" id="star1" name="rate" value="1" /><label for="star1" />
			<input type="radio" id="star2" name="rate" value="2" /><label for="star2" />
			<input type="radio" id="star3" name="rate" value="3" /><label for="star3" />
			<input type="radio" id="star4" name="rate" value="4" /><label for="star4" />
			<input type="radio" id="star5" name="rate" value="5" /><label for="star5" />
		</fieldset>
	{/if}

	<!-- Display Feature Request -->
	{#if displayFeatureRequest}
		<div>
			<label>
				Category:
				<select>
					<option value="">Select a category</option>
					<option value="User Interface (UI) Improvements">User Interface (UI) Improvements</option>
					<option value="New Functionality">New Functionality</option>
					<option value="Performance Optimization">Performance Optimization</option>
					<option value="Integration with Third-Party Services"
						>Integration with Third-Party Services</option
					>
					<option value="Customization Options">Customization Options</option>
					<option value="Accessibility Enhancements">Accessibility Enhancements</option>
					<option value="Security and Privacy Features">Security and Privacy Features</option>
					<option value="Collaboration and Sharing">Collaboration and Sharing</option>
					<option value="Other">Other</option>
				</select>
			</label>

			<label>
				Idea:
				<textarea />
			</label>
		</div>
	{/if}

	<!-- Display Open-ended Feedback -->
	{#if displayOpenEndedFeedback}
		<div>
			<label>
				Feedback:
				<textarea />
			</label>
		</div>
	{/if}

	<!-- Display Questions -->
	{#if displayQuestions}
		<div>
			<label>
				Questions:
				<textarea />
			</label>
		</div>
	{/if}

	<button type="submit">Submit</button>
</form>

<style>
	.feedback-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		max-width: 400px;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.feedback-form label {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.feedback-form input[type='checkbox'] {
		margin-right: 5px;
	}

	.feedback-form button[type='submit'] {
		padding: 10px 20px;
		background-color: #337ab7;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease-in-out;
	}

	.feedback-form button[type='submit']:hover {
		background-color: #23527c;
	}

	.feedback-form textarea {
		width: 100%;
		height: 100px;
		resize: vertical;
	}

	.feedback-form .rating-container {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.feedback-form .rating-container .star {
		cursor: pointer;
		margin-right: 5px;
		font-size: 18px;
		color: #ccc;
		transition: color 0.3s ease-in-out;
	}

	.feedback-form .rating-container .star:hover,
	.feedback-form .rating-container .star.active {
		color: #ffce00;
	}
</style>
