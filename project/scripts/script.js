const today = new Date();
const copyYear = document.getElementById("currentyear");
const modifiedDate = document.getElementById("lastModified")
document.addEventListener('DOMContentLoaded',
    function () {
        copyYear.textContent = today.getFullYear();
        modifiedDate.textContent = "Last Modification: " + document.lastModified;
    }
);

document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const completedTasksList = document.getElementById('completed-tasks-list'); // For completed-tasks.html
    const clearAllButton = document.getElementById('clear-all-button');
    const clearCompletedButton = document.getElementById('clear-completed-button'); // For completed-tasks.html

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

    // Function to save tasks to Local Storage
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Function to save completed tasks to Local Storage
    const saveCompletedTasks = () => {
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    };

    // Function to render tasks on the main To-Do List page
    const renderTasks = () => {
        if (!taskList) return; // Exit if not on the main To-Do List page

        taskList.innerHTML = ''; // Clear current list
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.setAttribute('data-index', index);
            li.className = task.completed ? 'completed' : ''; // Add 'completed' class if task is done

            li.innerHTML = ` 
                <span class="task-text">${task.text}</span>
                <div class="button-group">
                    <button class="complete-button" aria-label="Complete">${task.completed ? 'Uncomplete' : 'Complete'}</button>
                    <button class="delete-button">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    };






    // Function to render completed tasks on the Completed Tasks page
    const renderCompletedTasks = () => {
        if (!completedTasksList) return; // Exit if not on the completed tasks page

        completedTasksList.innerHTML = ''; // Clear current list
        completedTasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.setAttribute('data-index', index);
            li.innerHTML = `
                <span class="task-text completed-task-text" id="check-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<linearGradient id="1ayUTr30BaMDjOG69N2fSa_xTkoPEFGI0P7_gr1" x1="21.241" x2="3.541" y1="39.241" y2="21.541" gradientUnits="userSpaceOnUse"><stop offset=".108" stop-color="#0d7044"></stop><stop offset=".433" stop-color="#11945a"></stop></linearGradient><path fill="url(#1ayUTr30BaMDjOG69N2fSa_xTkoPEFGI0P7_gr1)" d="M16.599,41.42L1.58,26.401c-0.774-0.774-0.774-2.028,0-2.802l4.019-4.019	c0.774-0.774,2.028-0.774,2.802,0L23.42,34.599c0.774,0.774,0.774,2.028,0,2.802l-4.019,4.019	C18.627,42.193,17.373,42.193,16.599,41.42z"></path><linearGradient id="1ayUTr30BaMDjOG69N2fSb_xTkoPEFGI0P7_gr2" x1="-15.77" x2="26.403" y1="43.228" y2="43.228" gradientTransform="rotate(134.999 21.287 38.873)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2ac782"></stop><stop offset="1" stop-color="#21b876"></stop></linearGradient><path fill="url(#1ayUTr30BaMDjOG69N2fSb_xTkoPEFGI0P7_gr2)" d="M12.58,34.599L39.599,7.58c0.774-0.774,2.028-0.774,2.802,0l4.019,4.019	c0.774,0.774,0.774,2.028,0,2.802L19.401,41.42c-0.774,0.774-2.028,0.774-2.802,0l-4.019-4.019	C11.807,36.627,11.807,35.373,12.58,34.599z"></path>
</svg></span>
                <span class="task-text" id=dashed-text>${task.text}</span>
                <button class="delete-completed-button">Delete</button>
            `;
            completedTasksList.appendChild(li);
        });
    };

    // Add a new task
    if (addTaskButton) {
        addTaskButton.addEventListener('click', () => {
            const taskText = newTaskInput.value.trim();
            if (taskText !== '') {
                tasks.push({ text: taskText, completed: false });
                newTaskInput.value = '';
                saveTasks();
                renderTasks();
            }
        });
    }

    // Handle clicks on task list (complete/delete)
    if (taskList) {
        taskList.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            if (!li) return; // Not a list item

            const index = parseInt(li.getAttribute('data-index'));

            if (e.target.classList.contains('complete-button')) {
                const task = tasks[index];
                task.completed = !task.completed; // Toggle completed status

                if (task.completed) {
                    completedTasks.push(task); // Add to completed tasks list
                    tasks.splice(index, 1); // Remove from main tasks list
                }

                saveTasks();
                saveCompletedTasks();
                renderTasks(); // Re-render main list
                if (completedTasksList) renderCompletedTasks(); // Re-render completed list if on that page
            } else if (e.target.classList.contains('delete-button')) {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            }
        });
    }

    // Handle clearing all tasks from the main list
    if (clearAllButton) {
        clearAllButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all tasks? This cannot be undone.')) {
                tasks = [];
                saveTasks();
                renderTasks();
            }
        });
    }

    // Handle deleting from completed tasks list
    if (completedTasksList) {
        completedTasksList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-completed-button')) {
                const li = e.target.closest('li');
                if (!li) return;
                const index = parseInt(li.getAttribute('data-index'));

                completedTasks.splice(index, 1);
                saveCompletedTasks();
                renderCompletedTasks();
            }
        });
    }

    // Handle clearing all completed tasks
    if (clearCompletedButton) {
        clearCompletedButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all completed tasks? This cannot be undone.')) {
                completedTasks = [];
                saveCompletedTasks();
                renderCompletedTasks();
            }
        });
    }

    // Hamburger menu functionality
    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector("nav ul"); // Target the ul directly

    if (hamButton && navigation) { // Check if elements exist before adding event listener
        hamButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            hamButton.classList.toggle("open");
        });
    }

    // Initial render when pages load
    renderTasks(); // Always try to render main tasks
    renderCompletedTasks(); // Always try to render completed tasks
});