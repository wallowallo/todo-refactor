createAddTodoForm();
buildAddButton();
function initializeApp(listOfTodos) {

}

function addTodo() {
  var input1 = document.querySelector(".title");
  var input2 = document.querySelector(".description");
    var newDiv = createTodoListItem(input1.value, input2.value);
    document.body.appendChild(newDiv);
    input1.value = "";
    input2.value = "";

}
// function removeTodo(id) {deleteButton.addEventListener("click",() => document.body.removeChild(newDiv));}
