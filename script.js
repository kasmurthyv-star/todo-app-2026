function updateCount() {
    const list = document.getElementById('todo-list');
    const counter = document.getElementById('task-counter');
    const count = list.children.length;
    counter.innerText = `You have ${count} task${count === 1 ? '' : 's'} remaining.`;
}

function addTask() {
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    if (input.value.trim() === "") {
        alert("Please write a task!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<span onclick="this.style.textDecoration='line-through'" style="cursor:pointer;">${input.value}</span>
    <button class="delete-btn" onclick="this.parentElement.remove(); updateCount();">Delete</button>
        <span>${input.value}</span>
        <button class="delete-btn" onclick="this.parentElement.remove(); updateCount();">Delete</button>
    `;

    list.appendChild(li);
    input.value = ""; // Clear input
    updateCount();    // Update counter
}
