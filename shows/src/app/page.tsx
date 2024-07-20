"use client";

import { useEffect, useState } from "react";
import { Container, Heading } from "@chakra-ui/react";

import ShowDetails from "./components/features/shows/ShowDetails";
import ShowReviewSection from "./components/features/shows/ShowReviewSection";

export default function Home() {
  const [reviews, setReviews] = useState<review[]>([]);
  const [averageRating, setAverageRating] = useState<number | undefined>();

  function fetchReviews() {
    const storedReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    setReviews(storedReviews);
  }

  function removeReview(index: number) {
    const newReviews = reviews.filter((_, i) => i !== index);

    setReviews(newReviews);
    localStorage.setItem("reviews", JSON.stringify(newReviews));
  }

  useEffect(() => {
    let reviewsRatingSum = 0;

    reviews.forEach((review) => {
      if (review.rating) {
        reviewsRatingSum += +review.rating; // parseInt doesn't work so I had to use "+"
      }
    });

    setAverageRating(reviewsRatingSum / reviews.length);
  }, [reviews]);

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <main>
      <Container maxW={"container.md"} my={"2em"}>
        <Heading as="h1">TV shows APP</Heading>

        <ShowDetails
          title={"Shutter Island"}
          description={
            "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place."
          }
          imageUrl={"./shutter-island.jpg"}
          averageRating={averageRating}
        />

        <ShowReviewSection
          reviews={reviews}
          setReviews={setReviews}
          removeReview={removeReview}
        />
      </Container>
    </main>
  );
}
