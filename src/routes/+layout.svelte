<script>
	import NavBar from '$lib/NavBar.svelte';
	import BugReport from '$lib/BugReport.svelte';
</script>

<div class="appContainer">
	<NavBar />
	<BugReport />

	<slot>
		<!-- Page Rendering Happens Here -->
	</slot>
</div>

<style>
	@import '../global.css';
</style>
