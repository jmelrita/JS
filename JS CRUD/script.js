// initialize data variable
let data = [];

// function to add data
function addData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let newData = {
    name: name,
    email: email
  };
  data.push(newData);
  renderData();
}

// function to render data
function renderData() {
  let tableBody = document.getElementById("data");
  let dataHTML = "";
  for (let i = 0; i < data.length; i++) {
    dataHTML += "<tr>";
    dataHTML += "<td>" + data[i].name + "</td>";
    dataHTML += "<td>" + data[i].email + "</td>";
    dataHTML += "<td><button onclick='editData(" + i + ")'>Edit</button><button onclick='deleteData(" + i + ")'>Delete</button></td>";
    dataHTML += "</tr>";
  }
  tableBody.innerHTML = dataHTML;
}

// function to edit data
function editData(index) {
  let name = prompt("Enter new name:", data[index].name);
  let email = prompt("Enter new email:", data[index].email);
  data[index].name = name;
  data[index].email = email;
  renderData();
}

// function to delete data
function deleteData(index) {
  data.splice(index, 1);
  renderData();
}

// initial render of data
renderData();
