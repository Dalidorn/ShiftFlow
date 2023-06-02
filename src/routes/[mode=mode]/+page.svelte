<script>
	import GettingStartedModal from '../../lib/GettingStartedModal.svelte';
	import NewEmployeeModal from '../../lib/NewEmployeeModal.svelte';
	import NewRoleModal from '../../lib/NewRoleModal.svelte';
	import NewShiftModal from '../../lib/NewShiftModal.svelte';

	let shifts = [];
	let employees = ['Tom', 'Sam'];
	let roles = ['User', 'Member'];
</script>

<p>You need some data if you want to view it!</p>

<h2>Shifts</h2>
<ul>
	{#if shifts.length > 0}
		{#each shifts as shift}
			<li>{shift.name} from {shift.start} to {shift.end} as {shift.role}</li>
		{/each}
	{:else}
		<li>No Shifts Yet! Go make one!!</li>
	{/if}
</ul>

<h3>Employees</h3>
<ul>
	{#if employees.length > 0}
		{#each employees as employee}
			<li>{employee}</li>
		{/each}
	{:else}
		<li>No Employees yet! Go make one!!</li>
	{/if}
</ul>

<h3>Roles</h3>
<ul>
	{#if roles.length > 0}
		{#each roles as role}
			<li>{role}</li>
		{/each}
	{:else}
		<li>No Roles yet! Go make one!!</li>
	{/if}
</ul>


<GettingStartedModal />





<NewShiftModal shiftData={shifts} {employees} {roles} />
<NewRoleModal {roles} />
<NewEmployeeModal {employees} {roles} />
