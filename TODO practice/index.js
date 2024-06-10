let addTodoBtn = document.getElementById("addToDo");
let todoContainer = document.getElementById("todocontainer");
let input = document.getElementById("input");

function addTodo() {
  let p = document.createElement("p");
  p.innerText = input.value;
  p.classList.add("para");
  todoContainer.appendChild(p);
  input.value = "";

  p.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
  });
  p.addEventListener("dblclick", function () {
    p.innerText = "";
  });
}

addTodoBtn.addEventListener("click", addTodo);
