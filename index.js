let button = document.querySelector("#button");
let inputArea = document.querySelector("#user-input");
let taskBox = document.querySelector(".task-box");
const tasks = [
             
];




button.addEventListener('click', ()=>{
  let obj = {
    text: inputArea.value,
    completed: false,
    id: null
  }

  tasks.push(obj)

  tasks.forEach(updateIds)
  console.log(tasks);
  return obj
  

})
function updateIds(element, index, array){
  element.id = index
}
function createObj(){
  
}



function createTask(obj){
  let taskCont=document.createElement('div')
  let pCon=document.createElement('div')
  pCon.dataset.id=obj.id
  let newParaghraph=document.createElement('p')
  newParaghraph.textContent=obj.text
  pCon.appendChild(newParaghraph)
  let optionsCont=document.createElement('div')
  let done=document.createElement('div')
  optionsCont.appendChild(done)
  done.textContent='✅'
  let del=document.createElement('div')
  del.textContent='❎'
  pCon.appendChild(del)
  let edit=document.createElement('div')
  edit.textContent='✍'
  pCon.appendChild(edit)
  taskCont.appendChild(pCon)
  taskCont.appendChild(optionsCont)
  console.log(taskCont);
  
}















