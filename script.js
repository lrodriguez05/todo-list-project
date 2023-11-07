function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskContainer = document.getElementById("taskContainer");
  var taskText = taskInput.value;

  if (taskText.trim() !== "") {
    var taskDiv = document.createElement("div");
    taskDiv.className = "task";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskDiv.appendChild(checkbox);

    var label = document.createElement("label");
    label.textContent = taskText;
    taskDiv.appendChild(label);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      taskDiv.remove();
    };
    taskDiv.appendChild(deleteButton);

    taskContainer.appendChild(taskDiv);
    taskInput.value = "";
  }
}