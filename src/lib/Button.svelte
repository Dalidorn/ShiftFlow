<script>
	export let label;
	export let onClick;

	function handleClick() {
        eval(onClick);
    };
</script>

<button id="btn" class="btnComponent" on:click={handleClick}><span class="btnLabel">{label}</span></button>

<style>
	.btnLabel {
		padding: 10px 0 10px 0;
        margin: 0;
	}

	.btnComponent {
		align-items: center;
		background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
		border: 0;
		border-radius: 8px;
		box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
		box-sizing: border-box;
		color: #ffffff;
		display: flex;
		font-size: 20px;
		justify-content: center;
		line-height: 1em;
		height: fit-content;
		max-width: 100%;
		min-width: 140px;
		padding: 3px;
		text-decoration: none;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
		cursor: pointer;
		margin: 10px;
	}

	.btnComponent:active,
	.btnComponent:hover {
		outline: 0;
	}

	.btnComponent span {
		background-color: rgb(5, 6, 45);
		border-radius: 6px;
		width: 100%;
		height: 100%;
		transition: 300ms;
	}

	.btnComponent:hover span {
		background: none;
	}
</style>
