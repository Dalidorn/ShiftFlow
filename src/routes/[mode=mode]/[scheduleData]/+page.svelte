<script>
	import lz from 'lz-string';
	import { scaleTime, scaleBand, scaleOrdinal } from 'd3-scale';
	import { schemeCategory10 } from 'd3-scale-chromatic';

	export let data;

	const schedule = categorize(JSON.parse(lz.decompressFromEncodedURIComponent(data.scheduleData)));
	const timeRange = schedule.flatMap((shift) => [
		new Date(shift.start).valueOf(),
		new Date(shift.end).valueOf()
	]);
	const timeDim = scaleTime([Math.min(...timeRange), Math.max(...timeRange)], [0, 100]).nice();
	const barDim = scaleBand(
		schedule.map((d) => d.category),
		[13, 13 + 30] // 10 for each category
	).paddingInner(0.1);
	const nameDim = scaleOrdinal(
		schedule.map((d) => d.name),
		schemeCategory10
	);

	function categorize([first, ...rest], accumulator = []) {
		// Find any that don't overlap. This is when:
		// |------A------| |------B------| A before B
		// |------B------| |------A------| B before A
		const noOverlap = rest.filter((ele) => ele.end < first.start || ele.start > first.end);

		// Find any in the noOverlap array that dont overlap with each other
		function removeOverlaps([start, ...end], acc, category) {
			// An element overlaps when:
			// |--------A----|~~~~~|-------B---------------| A before B
			// |------|~~~~~~A~~~~~~|----------B-----------| A during B
			// |--------B----|~~~~~|-------A---------------| A after B
			// |------|~~~~~~B~~~~~~|----------A-----------| B during A
			const overlap = acc.some((ele) => {
				return (
					(ele.start < start.start && ele.end > start.start) || // A before B
					(ele.start > start.start && ele.end < start.end) || // A during B
					(ele.start > start.start && ele.start < start.end) || // B before A
					(ele.start < start.start && ele.end > start.end) // B during A
				);
			});

			return !start
				? acc
				: end.length === 0
				? overlap
					? acc
					: [...acc, { ...start, category: category }]
				: overlap
				? removeOverlaps(end, acc, category)
				: removeOverlaps(end, [...acc, { ...start, category: category }], category);
		}

		const lessOverlaps = removeOverlaps(noOverlap, [], first._id);
		const uncategorized = rest.filter((e) => !lessOverlaps.map((o) => o._id).includes(e._id));

		return rest.length === 0 || uncategorized.length === 0
			? [...accumulator, { ...first, category: first._id }, ...lessOverlaps]
			: categorize(uncategorized, [
					...accumulator,
					{ ...first, category: first._id },
					...lessOverlaps
			  ]);
	}
</script>

<content>
	<div class="list">
		{#each schedule as { start, end, role, name }}
			<p>{name} as {role} is starting at {start} and ending at {end}.</p>
		{/each}
	</div>

	<div class="graph">
		<svg viewBox="0 0 43 100">
			<line y1="0" x1="12" y2="100" x2="12" stroke="black" />
			{#each timeDim.ticks() as tick}
				<path id={timeDim(tick)} d="M 0,{timeDim(tick)} 12,{timeDim(tick) + 2}" stroke="black" />
				<text>
					<textPath href="#{timeDim(tick)}">{tick}</textPath>
				</text>
			{/each}
			{#each schedule as { start, end, category, name }}
				<rect
					y={timeDim(new Date(start))}
					x={barDim(category)}
					height={timeDim(new Date(end)) - timeDim(new Date(start))}
					width={barDim.bandwidth()}
					fill={nameDim(name)}
				/>
			{/each}
		</svg>
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
	svg {
		height: 100%;
		stroke-width: 0.1px;
	}
	text {
		font-size: 12%;
	}
</style>
