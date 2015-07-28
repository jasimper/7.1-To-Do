;(function() {
  var list = document.querySelector("[data-js=todoItems]");
  var form = document.querySelector("[data-js=form]");
  var hide = document.querySelector("[data-js=hide]");

  var entry;

  form.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
      var entry = document.querySelector("[data-js=entry]").value
      if( entry === "") {
        alert("You WILL enter a new task.");
      }
      else {
        var task = document.createElement("li");
        task.className += "todo__item";

        var checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.setAttribute("for", entry)

        var text = document.createElement("label");
        text.setAttribute("for", entry);
        text.innerHTML = entry;

        var button = document.createElement("button");
        button.className += "todo__itemRemove";
        button.innerHTML = "&#x2717;";
          button.addEventListener("click", function(e) {
          e.preventDefault();
          del(e.target.parentNode);
        });

        task.appendChild(checkbox)
        task.appendChild(text)
        task.appendChild(button)

        list.appendChild(task);

        var del = function(task) {
        task.remove();
        if(list.querySelectorAll('li').length === 0) {
          hide.style.display = 'block';
        }
        };
        form.reset()

      }
    }
    if(list.querySelectorAll('li').length > 0) {
      hide.style.display = 'none';
    }
  });

})();
