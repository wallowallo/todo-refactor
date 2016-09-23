createAddTodoForm();
buildAddButton();

function initializeApp(listOfTodos) {
   var newDiv = document.querySelector("todoList");
   for (var i = 0; i < listOfTodos.length; i++) {
     createTodoList(listOfTodos[i].title, listOfTodos[i].description);
     newDiv.id = "divTodo" + i;
   }
   console.log(listOfTodos);
}

function createAddTodoForm() {
  var form = buildForm();
  document.body.appendChild(form);
}

function addTodo() {
  var input1 = document.querySelector(".title");
  var input2 = document.querySelector(".description");
  if (input1.value === "" || input2.value === "") {
    return;
  } else {
    var newDiv = createTodoListItem();
    function createTodoList(title, description) {
      var todo = { title: title, description: description };
      listOfTodos.push(todo);
      newDiv.innerHTML = todo.title + "<br>" + "<br>" + "<br>" + todo.description;
    }
    createTodoList(input1.value, input2.value)
    input1.value = "";
    input2.value = "";
  }
  initializeApp(listOfTodos);
}

function createTodoList(title, description) {
  var newDiv = createTodoListItem();
  var todo = { title: title, description: description };
  var deleteButton = buildDeleteButton();
  newDiv.innerHTML = todo.title + "<br>" + "<br>" + "<br>" + todo.description;
  document.body.appendChild(newDiv);
  deleteButton.addEventListener("click",() => document.body.removeChild(newDiv));
  newDiv.appendChild(deleteButton);
}
