let addTodoBtn = document.getElementById("addToDo");
let todoContainer = document.getElementById("todocontainer");
let inputField = document.getElementById("input");

function addTodo() {
  var p = document.createElement("p");
  p.classList.add("para");
  p.innerText = inputField.value;
  todoContainer.appendChild(p);
  inputField.value = "";

  p.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
  });
  p.addEventListener("dblclick", function () {
    todoContainer.removeChild(p);
  });
}

addTodoBtn.addEventListener("click", addTodo);
