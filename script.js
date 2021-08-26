const edit = document.getElementById("edit");
const save = document.getElementById("save");
const add = document.getElementById("add");
const table = document.getElementById("table");
const editTableHeader = document.getElementsByTagName("TH");
const editTableData = document.getElementsByTagName("TD");
const removeRow = document.getElementById("remove");
const tableRow = document.getElementById("insertTable");

edit.addEventListener("click", function () {
  this.style.display = "none";
  removeRow.style.display = "initial";
  save.style.display = "initial";
  editTrue();
});

save.addEventListener("click", function () {
  this.style.display = "none";
  removeRow.style.display = "none";
  edit.style.display = "initial";
  editFalse();
});

function editTrue() {
  //TableData
  for (var i = 0; i < editTableData.length; i++) {
    editTableData[i].contentEditable = true;
  }
  //TableHeader
  for (var i = 0; i < editTableHeader.length; i++) {
    editTableHeader[i].contentEditable = true;
  }
}

function editFalse() {
  //TableData
  for (var i = 0; i < editTableData.length; i++) {
    editTableData[i].contentEditable = false;
  }
  //TableHeader
  for (var i = 0; i < editTableHeader.length; i++) {
    editTableHeader[i].contentEditable = false;
  }
}

add.addEventListener("click", function () {
  const Node = tableRow.cloneNode(true);
  table.appendChild(Node);
});

removeRow.addEventListener("click", function () {
  if (table.childElementCount <= 1) {
  } else {
    table.removeChild(table.lastChild);
  }
});
