let reviews = [];

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
  localStorage.setItem("reviews", JSON.stringify(reviews));

  form.reset();

  addReviewToDOM(newReview, reviews.length - 1);
  updateAverageRating();
});

const reviewsElement = document.querySelector(".reviews");

function addReviewToDOM(review, index) {
  const reviewTemplate = document.querySelector("[data-review-template]");
  const reviewElement = reviewTemplate.content.cloneNode(true).children[0];
  reviewElement.dataset.index = index;

  const reviewText = reviewElement.querySelector(".review-text");
  const reviewRating = reviewElement.querySelector(".review-rating");

  reviewText.textContent = review.text;
  reviewRating.textContent = review.rating + "/5";

  const deleteButton = reviewElement.querySelector(".review-delete-btn");
  deleteButton.addEventListener("click", () => {
    reviews.splice(index, 1);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    reviewElement.remove();

    updateAverageRating();
  });

  reviewsElement.appendChild(reviewElement);
}

function updateAverageRating() {
  const showAverageRatingElement = document.querySelector(
    ".show-average-rating"
  );
  let reviewsRatingSum = 0;

  reviews.forEach((review) => {
    reviewsRatingSum += parseInt(review.rating);
  });

  if (reviews.length > 0) {
    const showAverageRating = (reviewsRatingSum / reviews.length).toFixed(2);
    showAverageRatingElement.textContent = "Rating: " + showAverageRating;
  } else {
    showAverageRatingElement.textContent = "No ratings yet...";
  }
}

function renderReviews() {
  reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviews?.forEach((review, index) => {
    addReviewToDOM(review, index);
  });

  updateAverageRating();
}

renderReviews();
