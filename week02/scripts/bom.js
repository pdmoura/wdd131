const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const warning = document.querySelector('#warning');

function addChapter() {
    const chapter = input.value.trim();

    if (chapter === '') {
        warning.textContent = 'Please enter a valid book and chapter.';
        input.value = '';
        input.focus();
        return;
    }

    warning.textContent = ''; // Clear warning

    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    span.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', 'Remove ' + chapter);

    li.appendChild(span);
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
    });

    input.value = '';
    input.focus();
};

button.addEventListener('click', addChapter);

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addChapter();
    }
});

// Accessibility: Ensure the input field is focused when the page loads
window.addEventListener('load', function () {
    input.focus();
});