let button = document.querySelector("#button");
let inputArea = document.querySelector("#user-input");
let taskBox = document.querySelector(".task-box");
const tasks = [];
button.addEventListener("click", buttonAct);
inputArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});

function buttonAct() {
  if (inputArea.value !== "") {
    const newTask = createObj();

    createTask(newTask);
    inputArea.value = "";
    inputArea.placeholder = "Wpisz taska";
  } else {
    inputArea.placeholder = "WPISZ";
  }
}
function createObj() {
  let obj = {
    text: inputArea.value,
    completed: false,
    id: null,
  };
  tasks.push(obj);
  updateIds();

  console.log(tasks);
  return obj;
}

function updateIds() {
  tasks.forEach((el, index) => {
    el.id = index;
  });
}

taskBox.addEventListener("click", onTaskBoxClick);

function onTaskBoxClick(event) {
  if (event.target.classList.contains("task-icon-done")) {
    event.target.parentElement.previousElementSibling
      .querySelector("p")
      .classList.add("done");
    console.log(event.target.className);
    console.log(tasks);
    console.log(event.target.closest(".task-container").dataset.id);
  } else if (event.target.classList.contains("task-icon-delete")) {
    let taskElement = event.target.closest(".task-container");
    let id = taskElement.dataset.id;
    console.log(event.target.className);
    console.log(id);
    tasks.splice(id);
    taskElement.remove();
    updateIds();

    console.log(tasks);
  } else if (event.target.classList.contains("task-icon-edit")) {
    startEditMode(event.target);
  } else {
  }
}
function startEditMode(editButton) {
  let taskToEdit =
    editButton.parentElement.previousElementSibling.querySelector("p");
  let editInput =
    editButton.parentElement.previousElementSibling.querySelector("input");
  editInput.value = taskToEdit.textContent;
  editInput.classList.add("task-edit-input-editing");
  editInput.focus();
  editInput.addEventListener("keydown", handleEventConfirm);
}
function handleEventConfirm(event) {
  if (event.key === "Enter") {
    const input = event.target;
    const newText = input.value.trim();
    const taskCont = input.closest(".task-container");
    const taskText = taskCont.querySelector("p");
    taskText.textContent = newText;
    input.classList.remove("task-edit-input-editing");
    const id = taskCont.dataset.id;
    tasks[id].text = newText;
  }else if(event.key==='Escape'){
    const input = event.target;
    input.value=''
    input.classList.remove("task-edit-input-editing");
  }else if(!editInput.contains(event.target)){
    editInput.classList.remove('task-edit-input-editing')
    document.removeEventListener('click', )
  }
}

function createTask(obj) {
  let objekt = obj;
  let taskCont = document.createElement("div");
  taskCont.classList.add("task-container");
  taskCont.dataset.id = obj.id;
  let pCon = document.createElement("div");
  pCon.classList.add("task-paraghraph-container");
  let newParaghraph = document.createElement("p");
  newParaghraph.classList.add("task-text");
  newParaghraph.textContent = objekt.text;
  pCon.appendChild(newParaghraph);
  let taskEditInput = document.createElement("input");
  taskEditInput.type = "text";
  taskEditInput.classList.add("task-edit-input");
  pCon.appendChild(taskEditInput);
  let optionsCont = document.createElement("div");
  optionsCont.classList.add("task-options-container");
  let done = document.createElement("div");
  done.classList.add("task-icon-done");
  optionsCont.appendChild(done);
  done.textContent = "✅";
  let del = document.createElement("div");
  del.classList.add("task-icon-delete");
  del.textContent = "❎";
  optionsCont.appendChild(del);
  let edit = document.createElement("div");
  edit.classList.add("task-icon-edit");
  edit.textContent = "✍";
  optionsCont.appendChild(edit);
  taskCont.appendChild(pCon);
  taskCont.appendChild(optionsCont);
  taskBox.appendChild(taskCont);
  console.log(taskCont);
  edit.classList.add("symbol");
  done.classList.add("symbol");
  del.classList.add("symbol");
  return taskEditInput;
}
