
const input = document.querySelector("#newTodoInput");
const addBtn = document.querySelector("#addTodoBtn")
const orderList  = document.querySelector("#todoList");

addBtn.addEventListener("click",(e)=>{
  
  const listItem = document.createElement("li");
  if(input.value){
  

    listItem.innerText = input.value;
  
    orderList.appendChild(listItem);
  }
  


  
})