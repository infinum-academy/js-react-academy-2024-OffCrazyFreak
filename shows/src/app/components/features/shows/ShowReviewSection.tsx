import ReviewList from "../review/ReviewList";
import ReviewForm from "./ReviewForm";

interface ShowReviewSectionProps {
  reviews: review[];
  setReviews: (reviews: review[]) => void;

  removeReview: (index: number) => void;
}

export default function ShowReviewSection({
  reviews,
  setReviews,
  removeReview,
}: ShowReviewSectionProps) {
  return (
    <section>
      <ReviewForm reviews={reviews} setReviews={setReviews} />

      <ReviewList reviews={reviews} removeReview={removeReview} />
    </section>
  );
}
