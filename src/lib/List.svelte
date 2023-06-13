<script>
	import dayjs from 'dayjs';

	export let scheduleData;
</script>

{#each scheduleData as { start, end, role, name }}
	<p>
		{name} as {role} is starting at {dayjs(start).format('hh:mm a')} and ending at {dayjs(
			end
		).format('hh:mm a')}.
	</p>
{/each}
