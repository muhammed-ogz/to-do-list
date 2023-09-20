var add_item = document.querySelector("#text");
var confirm_button = document.querySelector("#todoButton");
var delete_todos = document.getElementById("deleteButton");
eventListeners();

// butona basıldığında fonksiyon çağırmak için

add_item.onkeypress = function add() {
  // klavye girişlerini kontrol için which methodu

  if (add == 13) {
    // create elements

    var todo_element = document.createElement("li");
    var in_span = document.createElement("span");
    var in_small = document.createElement("small");
    //create element input checkbox and value

    var todo_input = document.createElement("input");
    todo_input.setAttribute("type", "checkbox");
    todo_input.setAttribute("value", "x");

    //create date items

    var date = new Date();
    var now_time =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

    //add in input and date value

    var create_time = document.createTextNode(now);
    var item_value = document.createTextNode(this.value);

    //paste value
    in_small.appendChild(create_time);
    in_span.appendChild(item_value);
    in_span.appendChild(in_small);

    // Paste value 2

    todo_element.appendChild(todo_input);
    todo_element.appendChild(in_span);
    document.getElementsByClassName("readyItems")[0].appendChild(todo_element);

    // reset input
    this.value = "";
  }
};

confirm_button.onclick = function (clicked) {
  var todo_element = document.createElement("li");

  var in_span = document.createElement("span");
  var in_small = document.createElement("small");
  var todo_input = document.createElement("input");
  todo_input.setAttribute("type", "checkbox");
  todo_input.setAttribute("value", "x");

  var date = new Date();
  var now =
    " - tarih :  " +
    date.getDate() +
    " / " +
    date.getDate() +
    " / " +
    date.getFullYear();

  var time_item_create = document.createTextNode(now);
  var item_value = document.createTextNode(add_item.value);

  //addİtems
  in_small.appendChild(time_item_create);
  in_span.appendChild(item_value);
  in_span.appendChild(in_small);

  //paste values
  todo_element.appendChild(todo_input);
  todo_element.appendChild(in_span);
  document.getElementsByClassName("readyItems")[0].appendChild(todo_element);
};
//resetinput
function eventListeners() {
  delete_todos.addEventListener("click", DeleteAllTodos);

  function DeleteAllTodos() {
    if (confirm("Emin misiniz ?")) {
      document.getElementById("readyItems").innerHTML = "";
    }
  }
}

// localStorage.setItem(key, value);
// let veri = localStorage.getItem(key); // <- value
// if (localStorage.getItem("todo") === null) {
//  ...
// }
