let tasklist = [];

const savebtn = document.getElementById("save");
savebtn.addEventListener("click", addTask);

function addTask() {
  const notes = document.getElementById("notes").value;
  tasklist.push(notes);
  document.getElementById("notes").value = "";
  displayTask();
}

function displayTask() {
  let task = document.getElementById("task-list");
  task.innerHTML = "";
  for (let i = 0; i < tasklist.length; i++) {
    const li = document.createElement("li");
    li.dataset.index = i;
    li.appendChild(document.createTextNode(tasklist[i]));
    task.appendChild(li);

    var button = document.createElement("button");
    button.innerHTML = "Clear!";
    button.style.width = "100px";
    button.style.height = "30px";
    button.style.marginLeft = "20px";
    button.addEventListener("click", function () {
      const index = parseInt(li.dataset.index); // retrieve index from data attribute
      tasklist.splice(index, 1); // remove corresponding task from tasklist array
      displayTask(); // update display
    });
    li.appendChild(button);
  }
}
