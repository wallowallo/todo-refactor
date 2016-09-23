function initializeApp(listOfTodos) {
  document.body.appendChild(buildForm());
  document.body.appendChild(buildAddButton());
   var newDiv = document.querySelector("todoList");
   for (var i = 0; i < listOfTodos.length; i++) {
     document.body
     .appendChild(createTodoListItem(listOfTodos[i]));
   }
   console.log(listOfTodos);
}

function addTodo() {
  var input1 = document.querySelector(".title");
  var input2 = document.querySelector(".description");
  if (input1.value === "" || input2.value === "") {
    return;
  }
  var item = {
    title: input1.value,
    description: input2.value,
    id: generateUniqueId()
  };
  listOfTodos.push(item);
  document.body.appendChild(createTodoListItem(item));
  input1.value = "";
  input2.value = "";
  console.log(listOfTodos);
}

function generateUniqueId() {
  return new Date().getMilliseconds();
}
