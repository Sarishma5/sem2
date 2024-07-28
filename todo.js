/*document.getElementById("todo-form").addEventListener("submit",

    function(e){
        console.log("file submit");
        e.preventDefault();
        let newTodoText = document.getElementById('todo-input').value;
        let parentList = document.getElementById('todo-list-items');
        let newListItem = document.createElement("li");
        newListItem.innerText = newTodoText;
        newListItem.classList.add("list.item");
        parentList.appendChild(newListItem);


        let delBtn = document.createElement("button");
        delBtn.innerText = 'Delete';
        delBtn.classList.add("del-btn");
        newListItem.appendChild(delBtn);

        delBtn.addEventListener('click', function() {
            // Remove the parent <li> when the delete button is clicked
            parentList.removeChild(newListItem);
        });
    }
);

 

/*
//
let person = { name:"sarishma", age: 21 };
let address = { city:"kathmandu", state: 7 };

// Creating a shallow copy of the
// user profile by spreading properties
let userProfile = { ...person, ...address };

// Output
console.log(userProfile);


function add_to_obj(text){
    let id= Math.floor(Math.random()*10000);
    todo_obj.push({name:"sarishma", age: 21});

}

*/


/*

addTwoNum(1, 2);
function addTwoNum(a, b){
    console.log(a+b);
}

const addTwoNumber=(a, b)=>{
    console.log(a+b);
}

*/







/*
const addTodo = (e) => {
    e.preventDefault();

    let newTodoText = document.getElementById('todo-input').value;

    if (newTodoText === '') return;

    const todo = {
        id: Date.now().toString(),
        text: newTodoText,
        completed: fulse,
    };


    addTodoToList(todo);

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    newTodoText.value = '';
};


document.querySelector("#todo-form").addEventListener("submit", addTodo);

const addTodoToList = (todo) => {

    //get the parent list
    let parentList = document.getElementById('todo-list-items');

    //create new list item and append it
    let newListItem = document.createElement("li");

    newListItem.innerText = todo.text;
    
    newListItem.classList.add("list-item");
    //TODO: add 'data-todoid' attribute to newListitem with value "todo.id"
    newListItem.setAttribute('data-todoid', todo.id);
    
    //add the newly created list item to the parent list
    parentList.appendChild(newListItem);

    //add a delete button to the new list item
    let delBtn = document.createElement("button");
    delBtn.innerText = 'Delete';
    delBtn.classList.add("del-btn");
    delBtn.addEventListener('click', deleteTodo);
    newListItem.appendChild(delBtn);

    let checkBox = document.createElement("input");
    checkBox.setAttribute('type', 'checkbox');
    newListItem.appendChild(checkBox);
    //TODO: add event listener to the checkbox
}

//TODO: create a delete function
const deleteTodo = (e) => {
    const li = e.target.parentElement;
    const id = li.getAttribute('data-todoid');

    let todos = JSON.parse(localStorage.getItem('todos'));
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));

    li.remove();
};

//TODO: create a function to toggle the 'completed' status
const toggleCompletedStatus = (e) => {
};
*/













const addTodo = (e) => {
    e.preventDefault();

    let newTodoText = document.getElementById('todo-input').value;

    if (newTodoText === '') return;

    const todo = {
        id: Date.now().toString(),
        text: newTodoText,
        completed: false
    };

    addTodoToList(todo);

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    document.getElementById('todo-input').value = ''; // Clear the input field
};

document.querySelector("#todo-form").addEventListener("submit", addTodo);

const addTodoToList = (todo) => {
    // Get the parent list
    let parentList = document.getElementById('todo-list-items');

    // Create new list item and append it
    let newListItem = document.createElement("li");
    newListItem.innerText = todo.text;
    newListItem.classList.add("list-item");

    // Add 'data-todoid' attribute to newListItem with value "todo.id"
    newListItem.setAttribute('data-todoid', todo.id);

    // Add the newly created list item to the parent list
    parentList.appendChild(newListItem);

    // Add a delete button to the new list item
    let delBtn = document.createElement("button");
    delBtn.innerText = 'Delete';
    delBtn.classList.add("del-btn");
    delBtn.addEventListener('click', deleteTodo);
    newListItem.appendChild(delBtn);

    // Add a checkbox to the new list item
    let checkBox = document.createElement("input");
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('change', toggleCompletedStatus);
    newListItem.appendChild(checkBox);

    // Set checkbox state based on todo.completed
    checkBox.checked = todo.completed;
};

// Function to toggle the 'completed' status
const toggleCompletedStatus = (e) => {
    const checkbox = e.target;
    const li = checkbox.parentElement;
    const id = li.getAttribute('data-todoid');

    // Get the todos from local storage
    let todos = JSON.parse(localStorage.getItem('todos'));

    // Find the todo item to update
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        // Toggle the completed status based on the checkbox
        todo.completed = checkbox.checked;

        // Update the todos array in local storage
        localStorage.setItem('todos', JSON.stringify(todos));
    }
};

// Function to delete a todo item
const deleteTodo = (e) => {
    const li = e.target.parentElement;
    const id = li.getAttribute('data-todoid');

    // Remove the todo from local storage
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));

    // Remove the list item from the UI
    li.remove();
};
