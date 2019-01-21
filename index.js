function drag(event) {
  // 將id暫存起來
  event.dataTransfer.setData('draggable-item-id', event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  // 藉由id取出element後附加上去
  var id = event.dataTransfer.getData("draggable-item-id");
  event.target.appendChild(document.getElementById(id));
}