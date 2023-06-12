<script>
	import dayjs from 'dayjs';
	import lz from 'lz-string';
	/* import { scaleTime, scaleBand, scaleOrdinal } from 'd3-scale';
	import { schemeCategory10 } from 'd3-scale-chromatic'; */
	import Graph from '$lib/Graph.svelte';

	export let data;

	const schedule = JSON.parse(lz.decompressFromEncodedURIComponent(data.scheduleData));
</script>

<content>
	<div class="list">
		{#each schedule as { start, end, role, name }}
			<p>
				{name} as {role} is starting at {dayjs(start).format('hh:mm a')} and ending at {dayjs(
					end
				).format('hh:mm a')}.
			</p>
		{/each}
	</div>

	<div class="graph">
		<Graph scheduleData={schedule} />
	</div>
</content>

<style>
	content {
		display: flex;
		gap: 5px;
		height: 92vh;
	}
	.list {
		background-color: darkgray;
		height: 100%;
		width: 100%;
	}
	.graph {
		background-color: darkgray;
		height: 100%;
		width: 100%;
	}
</style>
