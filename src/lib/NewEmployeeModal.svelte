<script>
    export let roles;
    export let employees;
  
    let showModal = false;
    let employeeForm = { name: '', assignedRoles: [], availableRoles: roles };
    
  
    function handleSubmit() {
      // Handle form submission logic to create a new employee
      const newEmployee = employeeForm.name;
      employees = [...employees, newEmployee];
      console.log(employees);
  
      // Reset the form fields
      employeeForm = { name: '', assignedRoles: [], availableRoles: [] };
  
      // Close the modal or perform any other desired actions
      showModal = false;
    }
  
    function openModal() {
      showModal = true;
    }
  
    function assignRole(role) {
      employeeForm.assignedRoles = [...employeeForm.assignedRoles, role];
      employeeForm.availableRoles = employeeForm.availableRoles.filter((r) => r !== role);
    }
  
    function unassignRole(role) {
      employeeForm.availableRoles = [...employeeForm.availableRoles, role];
      employeeForm.assignedRoles = employeeForm.assignedRoles.filter((r) => r !== role);
    }
  </script>
  
  <div>
    <!-- Modal Trigger Button -->
    <button on:click={openModal}>Create New Employee</button>
  
    <!-- Modal -->
    {#if showModal}
      <div class="modal">
        <div class="modal-content">
          <h2>New Employee</h2>
          <form on:submit|preventDefault={handleSubmit}>
            <label for="name">Name:</label>
            <input type="text" id="name" bind:value={employeeForm.name} />
  
            <div class="role-selection">
              <div class="column">
                <h3>Available Roles</h3>
                <ul>
                  {#each employeeForm.availableRoles as role}
                    <li>
                      {role}
                      <button on:click={() => assignRole(role)}>Assign</button>
                    </li>
                  {/each}
                </ul>
              </div>
              <div class="column">
                <h3>Assigned Roles</h3>
                <ul>
                  {#each employeeForm.assignedRoles as role}
                    <li>
                      {role}
                      <button on:click={() => unassignRole(role)}>Unassign</button>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
  
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    {/if}
  </div>
  
  <style>
    .role-selection {
      display: flex;
    }
  
    .column {
      flex: 1;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
    }
  </style>
  