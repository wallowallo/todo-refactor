function initializeApp(listOfTodos) {
  createAddTodoForm();
  buildAddButton();
  for (var i = 0; i < listOfTodos.length; i++) {
    createTodoListItem(listOfTodos[i].name, listOfTodos[i].description);
    // var newDiv = createTodoListItem();
    // newDiv.innerHTML += (listOfTodos[i].title + "<br>" + listOfTodos[i].description);
    document.body.appendChild(newDiv);
  }
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
    newDiv.appendChild(deleteButton);
    input1.value = "";
    input2.value = "";
  }
}
// function removeTodo(id) {deleteButton.addEventListener("click",() => document.body.removeChild(newDiv));}
