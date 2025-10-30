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
  
  

})
function updateIds(element, index, array){
  element.id = index
}




function createTask(){
  let taskCont=document.createElement('div')
  let pCon=document.createElement('div')
  let newParaghraph=document.createElement('p')
  let optionsCont=document.createElement('div')
  let done=document.createElement('div')
  done.textContent='✅'
  let del=document.createElement('div')
  del.textContent='❎'
  let edit=document.createElement('div')
  edit.textContent='✍'
  

  return taskCont
  
}















