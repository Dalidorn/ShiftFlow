<script>
  export let year = 2023;
  export let month = 4;

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(year, month);
</script>

<div class="labels">
  <div class="label">Mon</div>
  <div class="label">Tue</div>
  <div class="label">Wed</div>
  <div class="label">Thu</div>
  <div class="label">Fri</div>
  <div class="label">Sat</div>
  <div class="label">Sun</div>
</div>

<div class="grid">
  {#each Array.from({ length: daysInMonth }, (_, i) => i + 1) as day}
    <div class="cell" style={`--color: var(--color-${day % 7 || 7})`}>{day}</div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px; /* Adjust the gap between cells as desired */
  }

  .labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px; /* Add some spacing below the labels */
  }

  .label {
    text-align: center;
    font-weight: bold;
  }

  .cell {
    aspect-ratio: 1/1; /* Ensure a square aspect ratio */
    position: relative;
    border-radius: 10px; /* Rounded edges */
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    background-image: linear-gradient(white, var(--color)); /* Apply color dynamically */
  }

  /* Define colors for each day of the week */
  :root {
    --color-1: #FF4136; /* Light red */
    --color-2: #FF851B; /* Light orange */
    --color-3: #FFDC00; /* Light yellow */
    --color-4: #2ECC40; /* Light green */
    --color-5: #0074D9; /* Light blue */
    --color-6: #B10DC9; /* Light purple */
    --color-7: #FF4136; /* Light red */
  }
</style>
