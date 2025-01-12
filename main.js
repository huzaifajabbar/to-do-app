const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');

toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deletecheck);

document.body.classList.add('darker');
document.getElementById('title').classList.add('darker-title');
toDoInput.classList.add('darker-input');

function addToDo(event) {
    event.preventDefault();
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add('todo', 'darker-todo');

    const newToDo = document.createElement('li');
    if (toDoInput.value === '') {
        alert("You must write something!");
    } else {
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add('todo-item');
        toDoDiv.appendChild(newToDo);

        const checked = document.createElement('button');
        checked.innerHTML = '<i class="fas fa-check"></i>';
        checked.classList.add('check-btn', 'darker-button');
        toDoDiv.appendChild(checked);

        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        deleted.classList.add('delete-btn', 'darker-button');
        toDoDiv.appendChild(deleted);

        toDoList.appendChild(toDoDiv);

        toDoInput.value = '';
    }
}

function deletecheck(event) {
    const item = event.target;

    if (item.classList[0] === 'delete-btn') {
        item.parentElement.classList.add("fall");
        item.parentElement.addEventListener('transitionend', function () {
            item.parentElement.remove();
        });
    }

    if (item.classList[0] === 'check-btn') {
        item.parentElement.classList.toggle("completed");
    }
}
