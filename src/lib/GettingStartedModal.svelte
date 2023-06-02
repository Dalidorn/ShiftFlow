<script>
     import Papa from 'papaparse';
  
    let show = true;
    let selectedOption = '';
  
    function closeModal() {
      show = false;
      selectedOption = '';
    }
  
    function selectOption(option) {
    selectedOption = option;

    if (option === 'import') {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.csv';

      fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];

        if (file) {
          Papa.parse(file, {
            header: true,
            complete: (results) => {
              const parsedData = results.data;
              console.log(parsedData);
              // Process the parsed CSV data as needed
            },
            error: (error) => {
              console.error('Error parsing CSV:', error);
            },
          });
        }
      });

      fileInput.click();
    }
  }
  </script>
  
  {#if show}
    <div class="modal">
      <div class="modal-container">
        <div class="modal-content">
          <h2>Welcome!</h2>
          <p>To get started, we need to create some data! You can either create it from scratch or import it from another app.</p>
          <div class="options">
            <button on:click={() => selectOption('import')}>Import</button>
            <button on:click={() => selectOption('start')}>Start from Scratch</button>
          </div>
        </div>
        <div class="modal-header">
          <h3>Selected Option: {selectedOption}</h3>
          <button on:click={closeModal}>Close</button>
        </div>
      </div>
    </div>
  {/if}
  
  <style>
    /* Add your desired styling for the modal here */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .modal-container {
      background-color: rgb(71, 71, 71);
      padding: 20px;
      border-radius: 5px;
      max-width: 400px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .options {
      margin-top: 20px;
    }
  
    .modal-header {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  </style>
  