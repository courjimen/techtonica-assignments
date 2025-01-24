// adding checkboxes to list items
function addChecks(){
    let listItems = document.querySelectorAll("#ingredients li")
    listItems.forEach(e => {
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        e.prepend(checkbox);
    });
    }
    
    addChecks();

// adding new list item to end of list
let newItem = document.createElement("li");
newItem.textContent = "Jalapenos";
document.querySelector('#ingredients').appendChild(newItem);

// adding checkbox
let ingredients = document.getElementById("ingredients");

let checkbox = document.createElement("input");

checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "myCheckbox";

let label = document.createElement("label")

label.htmlFor = "myCheckbox";

label.appendChild(
    document.createTextNode("Too spicy for you?")
);

ingredients.appendChild(checkbox);
ingredients.appendChild(label);

// adding strikethrough
checkbox.addEventListener("click", function(){
    if(checkbox.checked){
    label.classList = "checked";
    } 
})




