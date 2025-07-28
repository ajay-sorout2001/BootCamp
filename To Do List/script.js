function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed class
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "✖";
  deleteBtn.onclick = function (event) {
    event.stopPropagation(); // Prevent toggling complete
    taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // Clear input
}