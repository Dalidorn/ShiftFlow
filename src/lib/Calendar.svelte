<script>
    export let year;
    export let month;
  
    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };
  
    const daysInMonth = getDaysInMonth(year, month);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  </script>
  
  
  <div class="calendar">
    {#each days as day}
      <div class="day">{day}</div>
    {/each}
  </div>
  
  
  <style>
    .calendar {
      /* Your calendar styles */
    }
  </style>
  