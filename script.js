const input = document.querySelector("#newTodoInput");
const addBtn = document.querySelector("#addTodoBtn");
const list = document.querySelector("#list");

addBtn.addEventListener("click", (e) => {
  if (input.value.trim() !== "") {
    list.textContent = input.value;

    // Clear the input field
    input.value = "";
  }
});