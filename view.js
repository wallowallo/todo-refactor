//  - creates a new div with a classname todolist
//  - it adds the todolist item information to the div
//  - it assigns an id to the div
function createTodoListItem(item) {
  var newDiv = document.createElement("div");
  var deleteButton = buildDeleteButton();
  newDiv.innerHTML = item.title + "<br>" + "<br>" + "<br>" + item.description;
  newDiv.className = "todoList";
  deleteButton.addEventListener("click",() => {
    document.body.removeChild(newDiv)
    var toBeDeleted = listOfTodos.filter(function(element) {
      return element.id === item.id;
    });
    listOfTodos.splice(listOfTodos.indexOf(toBeDeleted[0]), 1);
  }  );
  newDiv.appendChild(deleteButton);
  return newDiv;
}

function buildDeleteButton() {
  var s = '<input type="button" class="removeTodo" value="X">';
  return buildTemplate(s);
}


function buildForm() {
  const form = `<form class="containInputs">
    <h2 class="header">Todo:</h2>
    <input type="text" class="title" placeholder="Title" maxlength="20">
    <input type="text" class="description" placeholder="Description" maxlength="40">
  </form>`;
  return buildTemplate(form);
}

function buildAddButton() {
  var str = "Add";
  const element = buildTemplate(`<button class="addButton"
                                         type="Submit">${str}</button>`);
  element.onclick = addTodo;
  return element;
}
