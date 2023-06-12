<script>
	import lz from 'lz-string';
	import Graph from '$lib/Graph.svelte';
	import List from '$lib/List.svelte';

	export let data;

	const schedule = JSON.parse(lz.decompressFromEncodedURIComponent(data.scheduleData));
</script>

<content>
	<div class="list">
		<List scheduleData={schedule} />
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
