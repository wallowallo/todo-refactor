function initializeApp(listOfTodos) {
  createAddTodoForm();
  buildAddButton();
  for (var i = 0; i < listOfTodos.length; i++) {
    //var newDiv = createTodoListItem();
    createTodoList(listOfTodos[i].title, listOfTodos[i].description);
    //newDiv.id = "divTodo" + i;
    //document.body.appendChild(newDiv);
    // var deleteButton = buildDeleteButton();
    // deleteButton.addEventListener("click",() => document.body.removeChild(newDiv));
    // newDiv.appendChild(deleteButton);
  }
}
function createTodoList(title, description) {
  var newDiv = createTodoListItem();
  var todo = { title: title, description: description };
  var deleteButton = buildDeleteButton();
  console.log(listOfTodos);
  newDiv.innerHTML = todo.title + "<br>" + "<br>" + "<br>" + todo.description;
  document.body.appendChild(newDiv);
  deleteButton.addEventListener("click",() => document.body.removeChild(newDiv));
  newDiv.appendChild(deleteButton);
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
      console.log(listOfTodos);
      newDiv.innerHTML = todo.title + "<br>" + "<br>" + "<br>" + todo.description;
    }
    createTodoList(input1.value, input2.value)
    document.body.appendChild(newDiv);
    var deleteButton = buildDeleteButton();
    deleteButton.addEventListener("click",() => document.body.removeChild(newDiv));
    newDiv.appendChild(deleteButton);
    input1.value = "";
    input2.value = "";
  }
}
