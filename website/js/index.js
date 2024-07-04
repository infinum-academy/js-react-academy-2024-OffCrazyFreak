const reviews = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel placerat magna. Etiam congue facilisis dui id sagittis. Quisque ornare leo ac ipsum consectetur, et condimentum ipsum cursus. Sed at molestie lectus. Curabitur volutpat at erat sed placerat. Duis ac pharetra tellus. Duis consequat ornare tincidunt.",
    rating: "5",
  },
  { text: "blabla", rating: "1" },
];

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

  form.reset();

  renderReviews();
});

const reviewsElement = document.querySelector(".reviews");

function displayReview(review) {
  const reviewTemplate = document.querySelector("[data-review-template]");
  const reviewElement = reviewTemplate.content.cloneNode(true).children[0];

  const reviewText = reviewElement.querySelector(".review-text");
  const reviewRating = reviewElement.querySelector(".review-rating");

  reviewText.textContent = review.text;
  reviewRating.textContent = review.rating + "/5";

  reviewsElement.appendChild(reviewElement);
}

function renderReviews() {
  reviewsElement.innerHTML = "";

  reviews.forEach((review) => {
    displayReview(review);
  });
}

renderReviews();
