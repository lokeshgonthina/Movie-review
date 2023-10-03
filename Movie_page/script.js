document.addEventListener("DOMContentLoaded", function() {
    var reviewForm = document.getElementById("review-form");
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var userName = document.getElementById("user-name").value;
        var userReview = document.getElementById("user-review").value;

        // Create a new review element
        var newReview = document.createElement("div");
        //newReview.classList.add("review");
        //newReview.innerHTML = "<h3>" + userName + "</h3><p>\"" + userReview + "\"</p>";
        document.querySelector(".review").innerHTML=document.querySelector(".review").innerHTML+"<h3>" + userName + "</h3><p>\"" + userReview + "\"</p>";
        // Append the new review to the reviews section
        var reviewsSection = document.querySelector(".reviews");
        reviewsSection.appendChild(newReview);

        // Clear the form fields after submission
        document.getElementById("user-name").value = "";
        document.getElementById("user-review").value = "";
    });
});