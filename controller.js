function initializeApp(listOfTodos) {
}
createAddTodoForm();
buildAddButton();

function addTodo() {
  var input1 = document.querySelector(".title");
  var input2 = document.querySelector(".description");
  if (input1.value === "" || input2.value === "") {
    return;
  } else {
    var newDiv = createTodoListItem(input1.value, input2.value);
    document.body.appendChild(newDiv);
    input1.value = "";
    input2.value = "";
  }
}
// function removeTodo(id) {deleteButton.addEventListener("click",() => document.body.removeChild(newDiv));}
