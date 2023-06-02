<script>
	let showModal = false;
	let roleForm = {};
	export let roles;

	function handleSubmit() {
		// Handle form submission logic to create a new role
		const newRole = { ...roleForm };
		roles = [...roles, newRole];

		// Reset the form fields
		roleForm = {};

		// Close the modal or perform any other desired actions
		showModal = false;
	}

	function openModal() {
		showModal = true;
	}
</script>

<div>
	<!-- Modal Trigger Button -->
	<button on:click={openModal}>Create New Role</button>

	<!-- Modal -->
	{#if showModal}
		<div class="modal">
			<div class="modal-content">
				<h2>New Role</h2>
				<form on:submit|preventDefault={handleSubmit}>
					<label for="name">Name:</label>
					<input type="text" id="name" bind:value={roleForm.name} />

					<label for="description">Description:</label>
					<input type="text" id="description" bind:value={roleForm.description} />

					<button type="submit">Create</button>
				</form>
			</div>
		</div>
	{/if}
</div>

<style>
	/* Styles for the modal and form */
</style>
