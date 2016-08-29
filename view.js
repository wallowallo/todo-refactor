function createTodoListItem(title, description) {
  var newDiv = document.createElement("div");
    newDiv.className = "todoList"
    var todo = { title: title, description: description }
    listOfTodos.push(todo)
    console.log(listOfTodos)
    newDiv.innerHTML = todo.title + "<br>" + "<br>" + "<br>" + todo.description;
    var deleteButton = buildDeleteButton();
    newDiv.appendChild(deleteButton);
    return newDiv;
}
function buildDeleteButton() {
  var newButton = document.createElement("input");
       newButton.type = "button";
       newButton.className = "removeTodo"
       newButton.value = "X"
       return newButton;
}

function constructTodos(title, description) {
var newTodo = { title: title, description: title };
}

function createAddTodoForm() {
  var form = buildForm();
  document.body.appendChild(form);
}


function buildForm() {
  var containInputs = document.createElement("form")
  containInputs.className = "containInputs";
  var header = buildHeader();
  var title = buildTitle();
  var description = buildDescription();
  containInputs.appendChild(header);
  containInputs.appendChild(title);
  containInputs.appendChild(description);
  return containInputs;
}

function buildHeader() {
  var h2 = document.createElement("h2")
  h2.className = "header";
  h2.value = "Todo:";
  var textH2 = document.createTextNode("Todo:");
  h2.appendChild(textH2);
  return h2;
}

function buildTitle() {
  var inputTitle = document.createElement("input")
  inputTitle.type = "text";
  inputTitle.className = "title";
  inputTitle.placeholder = "Title";
  inputTitle.maxlength = "20"
  return inputTitle;
}

function buildDescription() {
  var inputDescription = document.createElement("input")
  inputDescription.className = "description";
  inputDescription.placeholder = "Description";
  inputDescription.maxlength = "40"
  return inputDescription;
}

function buildAddButton() {
  var inputAdd = document.createElement("button");
  inputAdd.className = "addButton";
  inputAdd.type = "submit"
  inputAdd.onclick =  addTodo;
  inputAdd.value = "Add";
  var textButton = document.createTextNode("Add");
  inputAdd.appendChild(textButton);
  document.body.appendChild(inputAdd);
return inputAdd;
}
