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

    localStorage.setItem("reviews", JSON.stringify(reviews));

    renderReviews();
  });

  reviewsElement.appendChild(reviewElement);
}

function renderReviews() {
  reviewsElement.innerHTML = "";

  reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  let reviewsRatingSum = 0;

  reviews?.forEach((review, index) => {
    reviewsRatingSum += parseInt(review.rating);
    displayReview(review, index);
  });

  const showAverageRatingElement = document.querySelector(
    ".show-average-rating"
  );
  if (reviews.length > 0) {
    const showAverageRating = (reviewsRatingSum / reviews.length).toFixed(2);
    showAverageRatingElement.textContent = "Rating: " + showAverageRating;
  } else {
    showAverageRatingElement.textContent = "No ratings yet...";
  }
}

renderReviews();
