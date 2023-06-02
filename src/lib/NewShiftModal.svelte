<script>
	let showModal = false;
	export let roles;
    export let employees;
	export let shiftData;
	let shiftForm = {};

	function handleSubmit() {
		// Handle form submission logic to create a new shift
		// You can access the shift data using the 'shiftForm' object
		// e.g., shiftForm.name, shiftForm.role, shiftForm.start, shiftForm.end
        newShift = { ...shiftForm };

		// Add newShift to existing shiftData
		shiftData.push(newShift);

		// Reset the form fields
		shiftForm = {};

		// Close the modal or perform any other desired actions
		showModal = false;
	}

	function openModal() {
		showModal = true;
	}
</script>

<div>
	<!-- Modal Trigger Button -->
	<button on:click={openModal}>Create New Shift</button>

	<!-- Modal -->
	{#if showModal}
		<div class="modal">
			<div class="modal-content">
				<h2>New Shift</h2>
				<form on:submit|preventDefault={handleSubmit}>

					<label for="name">Name:</label>
					<select id="name" bind:value={shiftForm.name}>
                        {#each employees as employee}
                            <option value={employee}>{employee}</option>
                        {/each}
                    </select>

					<label for="role">Role:</label>
					<select id="role" bind:value={shiftForm.role}>
						{#each roles as role}
							<option value={role}>{role}</option>
						{/each}
					</select>

					<label for="start">Start:</label>
					<input type="datetime-local" id="start" bind:value={shiftForm.start} />

					<label for="end">End:</label>
					<input type="datetime-local" id="end" bind:value={shiftForm.end} />

					<button type="submit">Create</button>
				</form>
			</div>
		</div>
	{/if}
</div>

<style>
	/* Styles for the modal and form */
</style>
