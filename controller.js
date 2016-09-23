function initializeApp(listOfTodos) {
  createAddTodoForm();
  buildAddButton();
   var newDiv = document.querySelector("todoList");
   for (var i = 0; i < listOfTodos.length; i++) {
     document.body
     .appendChild(createTodoListItem(
       listOfTodos[i].title,
       listOfTodos[i].description
     ));
  //   newDiv.id = "divTodo" + i;
   }
   console.log(listOfTodos);
}

function addTodo() {
  var input1 = document.querySelector(".title");
  var input2 = document.querySelector(".description");
  if (input1.value === "" || input2.value === "") {
    return;
  } else {
    //var newDiv = createTodoListItem();
    //  function createTodoList(title, description) {
    //  var todo = { title: title, description: description };
    //  listOfTodos.push(todo);
    //  newDiv.innerHTML = todo.title + "<br>" + "<br>" + "<br>" + todo.description;
    //}
    listOfTodos.push({ title: input1.value, description: input2.value });
    document.body
    .appendChild(createTodoListItem(
      input2.value,
      input2.value
    ));
    input1.value = "";
    input2.value = "";
    console.log(listOfTodos);
  }
  //initializeApp(listOfTodos);
}
