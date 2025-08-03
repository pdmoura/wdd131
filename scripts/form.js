const products = [
    {
        id: "fc-1888",
        name: "My To-Do List App",
        averagerating: 5
    },
    {
        id: "fc-1889",
        name: "Add task Functionality",
        averagerating: 4.5
    },
    {
        id: "fc-1890",
        name: "Task List Vizualization",
        averagerating: 4.5
    },
    {
        id: "fc-1891",
        name: "Task Completion Feature",
        averagerating: 4.0
    }
];

const today = new Date();
const copyYear = document.getElementById("currentyear");
const modifiedDate = document.getElementById("lastModified")
document.addEventListener('DOMContentLoaded',
    function () {
        const copyYear = document.getElementById("currentyear");
        copyYear.textContent = today.getFullYear();
        modifiedDate.textContent = "Last Modification: " + document.lastModified;
        const select = document.getElementById("productName");
        products.forEach((product) => {
            let option = document.createElement('option');
            option.innerHTML = `<option value="${product.id}">${product.name}</option>`;
            select.appendChild(option)
        });
    }
);

document.addEventListener('submit', function () {
    let submittedReviews = localStorage.getItem('submittedReviews');
    if (submittedReviews) {
        submittedReviews = Number(submittedReviews) + 1;
        localStorage.setItem('submittedReviews', `${String(submittedReviews)}`)
    } else {
        localStorage.setItem('submittedReviews', '1');
    }
});