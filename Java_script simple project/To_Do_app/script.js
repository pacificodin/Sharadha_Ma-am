document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-todo');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function() {
        const task = inputField.value.trim();
        if (task !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            
            // Optional: Add a delete button to each task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                listItem.remove();
            };
            deleteButton.style.marginLeft= '43%';
            listItem.appendChild(deleteButton);
            
            todoList.appendChild(listItem);
            inputField.value = ''; // Clear input field after adding
        }
    });

    // Optional: Allow pressing "Enter" to add a task
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
