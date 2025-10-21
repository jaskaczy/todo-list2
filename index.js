let button = document.querySelector("#button");
let inputArea = document.querySelector("#user-input");
let taskBox = document.querySelector(".task-box");
let tasks = [];
let tasksList = document.querySelector(".task-grapper");

button.addEventListener("click", () => {
  if (inputArea.value !== "") {
    createTask();
    inputArea.value = "";
    inputArea.placeholder = "Wpisz taska";
  } else {
    inputArea.placeholder = "Podaj taska !!!!!!!!!!!!!!!!!";
  }
});

function createTask() {
  let taskCont = document.createElement("div");
  taskCont.classList.add("new-task-container");
  let task = document.createElement("p");
  task.id = "new-task";
  task.classList.add("new-task-text");
  addTextFromInput(task);
  taskCont.appendChild(task);
  createTaskNav(taskCont);
  taskBox.appendChild(taskCont);
}
function createTaskNav(taskCont) {
  let navCont = document.createElement("div");
  navCont.classList.add("symbols-cont");
  let done = document.createElement("div");
  done.classList.add("symbol");
  done.id='done-symbol'
  done.textContent = "✔️";
  navCont.appendChild(done);
  let del = document.createElement("div");
  del.classList.add("symbol");
  del.id = 'del-symbol'
  del.textContent = "✖️";
  navCont.appendChild(del);
  let edit = document.createElement("div");
  edit.classList.add("symbol");
  edit.id = 'edit-symbol'
  edit.textContent = "✏️";
  navCont.appendChild(edit);
  taskCont.appendChild(navCont);
}
function delTask(task){
  
}
function addTextFromInput(task) {
  let cipka = inputArea.value;
  task.textContent = cipka;
}






