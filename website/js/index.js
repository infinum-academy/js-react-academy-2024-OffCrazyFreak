const form = document.querySelector(".reviews-form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting in the traditional way

  const textInput = document.querySelector(".review-text-input");
  const ratingInput = document.querySelector(".review-rating-input");

  const newReview = {
    text: textInput.value,
    rating: ratingInput.value,
  };

  reviews.push(newReview);
  reviews = localStorage.setItem("reviews", JSON.stringify(reviews));

  form.reset();

  renderReviews();
});

const reviewsElement = document.querySelector(".reviews");

function displayReview(review, index) {
  const reviewTemplate = document.querySelector("[data-review-template]");
  const reviewElement = reviewTemplate.content.cloneNode(true).children[0];

  const reviewText = reviewElement.querySelector(".review-text");
  const reviewRating = reviewElement.querySelector(".review-rating");

  reviewText.textContent = review.text;
  reviewRating.textContent = review.rating + "/5";

  const deleteButton = reviewElement.querySelector(".review-delete-btn");
  deleteButton.addEventListener("click", () => {
    reviews.splice(index, 1);

    reviews = localStorage.setItem("reviews", JSON.stringify(reviews));

    renderReviews();
  });

  reviewsElement.appendChild(reviewElement);
}

function renderReviews() {
  reviewsElement.innerHTML = "";

  reviews = JSON.parse(localStorage.getItem("reviews"));

  reviews.forEach((review, index) => {
    displayReview(review, index);
  });
}

let reviews;
renderReviews();
