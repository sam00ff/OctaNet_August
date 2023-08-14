const taskList = document.getElementById("taskList");

    function addTask() {
      const taskName = document.getElementById("taskName").value;
      const deadline = document.getElementById("deadline").value;
      const priority = document.getElementById("priority").value;

      if (taskName && deadline) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          <input type="checkbox" onchange="toggleTaskCompletion(this)">
          <strong>${taskName}</strong> (Deadline: ${deadline}, Priority: ${priority})
          <button onclick="editTask(this)">Edit</button>
          <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);

        // Clear input fields
        document.getElementById("taskName").value = "";
        document.getElementById("deadline").value = "";
      }
    }

    function toggleTaskCompletion(checkbox) {
      const taskName = checkbox.nextElementSibling;
      if (checkbox.checked) {
        taskName.style.textDecoration = "line-through";
      } else {
        taskName.style.textDecoration = "none";
      }
    }

    function editTask(button) {
      const taskItem = button.parentElement;
      const taskName = taskItem.querySelector("strong").textContent;
      const deadline = taskItem.textContent.match(/Deadline: ([^\s]+)/)[1];
      const priority = taskItem.textContent.match(/Priority: ([^\s]+)/)[1];

      document.getElementById("taskName").value = taskName;
      document.getElementById("deadline").value = deadline;
      document.getElementById("priority").value = priority;

      // Remove the task item from the list
      taskList.removeChild(taskItem);
    }

    function deleteTask(button) {
      const taskItem = button.parentElement;
      taskList.removeChild(taskItem);
    }