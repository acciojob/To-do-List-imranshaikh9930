
const input = document.querySelector("#newTodoInput");
const addBtn = document.querySelector("#addTodoBtn")
const orderList  = document.querySelector("#todoList");

addBtn.addEventListener("click",(e)=>{
  

  if(input.value){
    const listItem = document.createElement("li");

    listItem.innerText = input.value;
  
    orderList.appendChild(listItem);
  }
  


  
})