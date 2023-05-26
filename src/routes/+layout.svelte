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
	:global(html) {
		background: linear-gradient(30deg, #080b12ff, #181d22ff);
		width: 100vw;
		height: 100vh;
        padding: 0;
        margin: 0;
	}

  :global(div) {
    color: white;
  }

	:global(.red-outline) {
		outline: solid red 3px;
	}
</style>
