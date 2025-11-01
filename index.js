let button = document.querySelector("#button");
let inputArea = document.querySelector("#user-input");
let taskBox = document.querySelector(".task-box");
const tasks = [];

button.addEventListener("click", buttonAct)
 inputArea.addEventListener('keydown', (e)=>{
  if(e.key==='Enter'){
    button.click()
  }
 })
  
  
function buttonAct(){
   if(inputArea.value !== ''){
    const newTask = createObj();
    createTask(newTask);
    inputArea.value = ''
    inputArea.placeholder='Wpisz taska'
    }else{
      inputArea.placeholder = 'WPISZ'
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




taskBox.addEventListener('click', onTaskBoxClick)


function onTaskBoxClick(event){
  if(event.target.classList.contains('task-icon-done')){
    event.target.parentElement.previousElementSibling.querySelector('p').classList.add('done')
    console.log(event.target.className);
    console.log(tasks);
    
    
    
  } else if(event.target.classList.contains('task-icon-delete')){
    let xd = event.target.parentElement.parentElement.parentElement.querySelector('div') 
    // tasks.splice(xd)
    // console.log(event.target.className);
    // console.log(xd.className)
    // console.log(tasks);
    
  }

  else if(event.target.classList.contains('task-icon-edit')){
    // event.target.parentElement.previousElementSibling.querySelector('p')
    console.log(event.target.className);
  }else{}

}

function createTask(obj) {
  let objekt = obj;
  let taskCont = document.createElement("div");
  taskCont.classList.add('task-container')
  taskCont.dataset.id = obj.id;
  let pCon = document.createElement("div");
  pCon.classList.add('task-paraghraph-container')
  let newParaghraph = document.createElement("p");
  newParaghraph.classList.add('task-text')
  newParaghraph.textContent = objekt.text;
  pCon.appendChild(newParaghraph);
  let optionsCont = document.createElement("div");
  optionsCont.classList.add('task-options-container')
  let done = document.createElement("div");
  done.classList.add('task-icon-done')
  optionsCont.appendChild(done);
  done.textContent = "✅";
  let del = document.createElement("div");
  del.classList.add('task-icon-delete')
  del.textContent = "❎";
  optionsCont.appendChild(del);
  let edit = document.createElement("div");
  edit.classList.add('task-icon-edit')
  edit.textContent = "✍";
  optionsCont.appendChild(edit);
  taskCont.appendChild(pCon);
  taskCont.appendChild(optionsCont);
  taskBox.appendChild(taskCont);
  console.log(taskCont);
  edit.classList.add('symbol')
  done.classList.add('symbol')
  del.classList.add('symbol')
}
