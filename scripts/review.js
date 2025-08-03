const today = new Date();
const copyYear = document.getElementById("currentyear");
const modifiedDate = document.getElementById("lastModified")
document.addEventListener('DOMContentLoaded', 
    function() {
        const copyYear = document.getElementById("currentyear");
        copyYear.textContent = today.getFullYear();
        modifiedDate.textContent = "Last Modification: " + document.lastModified;
        const reviewsAmmount = document.querySelector('#reviewsAmmount');
        let submittedReviews = localStorage.getItem('submittedReviews');
        if (submittedReviews) {
            submittedReviews = localStorage.getItem('submittedReviews');
        } else {
            localStorage.setItem('submittedReviews', '0');
            submittedReviews = localStorage.getItem('submittedReviews');
        }
        reviewsAmmount.textContent = submittedReviews;
    }
);