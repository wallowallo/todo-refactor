function buildTemplate(template) {
  var div = document.createElement('div');
  div.innerHTML = template;
  var element = div.childNodes[0];
  return element;
}
