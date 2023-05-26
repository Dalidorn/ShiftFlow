<script>
	import html2canvas from 'html2canvas';
	import reportData from './DiscordReporting';

	let isOpen = false;
	let isClosable = false;
	let isSelecting = false;
	let selectedElements = [];
	let screenshotData = null;

	function toggleModal() {
		isOpen = !isOpen;

		if (isOpen) {
			window.addEventListener('click', handleClickOutside);
		} else {
			window.removeEventListener('click', handleClickOutside);
		}
	}

	function handleClickOutside(event) {
		if (isClosable) {
			if (event.target.className.includes('bug-report-modal')) {
				toggleModal(); // Close the modal
				isClosable = false;
			}
		} else {
			isClosable = true;
		}
	}

	function handleMouseOver(event) {
		event.target.classList.add('red-outline');
	}

	function handleMouseOut(event) {
		event.target.classList.remove('red-outline');
	}

	function handleClick(event) {
		selectedElements.push(event.target);
		event.target.classList.remove('red-outline');
		console.log('clicked: ' + event.target.nodeName);
		isSelecting = false;
		toggleModal();

		document.removeEventListener('mouseover', handleMouseOver);
		document.removeEventListener('mouseout', handleMouseOut);
		document.removeEventListener('click', handleClick);
	}

	function toggleElementSelector() {
		isSelecting = !isSelecting;
		console.log('isSelecting:', isSelecting);

		if (isSelecting) {
			toggleModal(); // Close the modal
			document.addEventListener('mouseover', handleMouseOver);
			document.addEventListener('mouseout', handleMouseOut);
			setTimeout(() => {
				document.addEventListener('click', handleClick);
				console.log('CLICK EVENTS SHOULD BE LIVE');
			}, 500);
		} else {
			toggleModal(); // Reopen the modal

			document.removeEventListener('mouseover', function (event) {
				event.target.classList.add('red-outline');
			});

			document.removeEventListener('mouseout', function (event) {
				event.target.classList.remove('red-outline');
			});
		}
	}

	function captureScreenshot() {
		toggleModal();
		setTimeout(() => {
			console.log('screenshotting!');
			html2canvas(document.body).then((canvas) => {
				// Convert the canvas to a data URL
				screenshotData = canvas.toDataURL();
			});
		}, 300);
		setTimeout(() => {
			toggleModal();
		}, 500);
	}

	function collectUserData() {}

	function submitBugReport(event) {
		event.preventDefault();

		let bugReport = {
			type: 'Bug',
			report: `---New ${document.querySelector('#severity').value} Bug Report!---
Selected Elements: ${selectedElements[0].nodeName}
Description: ${document.querySelector('#bugDesc').value}
Browser:
`
		};

		reportData(bugReport);
	}
</script>

<div class="bug-report" on:click={toggleModal}>Report a Bug</div>

{#if isOpen}
	<div class="bug-report-modal">
		<div class="bug-report-content">
			<button class="close-button" on:click={toggleModal}>x</button>
			<h2>Report a Bug</h2>
			<p>
				We are sorry that you encountered an issue. Please describe the problem and provide any
				additional details that can help us reproduce and address it.
			</p>
			{#if selectedElements.length > 0}
				<ul>
					{#each selectedElements as element}
						<li>{element.nodeName.toLowerCase()}</li>
					{/each}
				</ul>
			{/if}
			<button on:click={toggleElementSelector}>Show Element Selector</button>
			<button on:click={captureScreenshot}>Capture Screenshot</button>
			<select id="severity">
				<option value="Critical">Critical (App Breaking)</option>
				<option value="Major">Major (Feature Breaking)</option>
				<option value="Disruptive">Disruptive (Inconvient)</option>
				<option value="Minor">Minor (Formatting, Spelling, etc)</option>
			</select>
			<input type="text" id="bugDesc" placeholder="Bug description" />
			<button on:click={submitBugReport}>Submit</button>
			{#if screenshotData}
				<img class="screenCap" src={screenshotData} alt="Screenshot" />
			{/if}
		</div>
	</div>
{/if}

<style>
	.bug-report {
		position: fixed;
		bottom: 20px;
		right: 20px;
		background-color: #337ab7;
		color: #fff;
		padding: 8px;
		border-radius: 5px;
		cursor: pointer;
		transition: transform 0.3s ease-in-out;
		z-index: 999;
	}

	.bug-report:hover {
		transform: scale(1.1);
	}

	.bug-report-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 999;
	}

	.bug-report-content {
		background-color: #fff;
		padding: 20px;
		border-radius: 5px;
		text-align: center;
	}

	.screenCap {
		max-height: 30vh;
		aspect-ratio: auto;
	}
</style>
