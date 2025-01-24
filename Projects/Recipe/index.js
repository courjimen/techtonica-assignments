//adding new list item to end of list
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

toggle.appendChild(checkbox);
toggle.appendChild(label);

// adding strikethrough
checkbox.addEventListener("click", function(){
    if(checkbox.checked){
    label.classList = "checked";
    } else {
        label.classList.remove("checked");
    }
})

// List checklist
let listItems = document.querySelectorAll("#ingredients li");

// let liText = document.getElementById("test").innerHTML;

// console.log(liText);

listItems.forEach(e => {
    let checking = document.createElement("input");
    checking.setAttribute("type", "checkbox");
    e.prepend(checking);
});

checking.addEventListener("click", function(){
    if(checking.checked){
    liText.classList = "checked";
    } else {
        liText.classList.remove("checked");
    }
})

function toggleIt() {
    let x = document.getElementById("dropdown");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display ="none";
    }
   }

