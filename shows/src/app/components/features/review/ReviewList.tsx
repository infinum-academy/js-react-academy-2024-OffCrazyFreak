import { Flex } from "@chakra-ui/react";

import ReviewItem from "./ReviewItem";

interface ReviewsProps {
  reviews: review[];
  removeReview: (index: number) => void;
}

export default function Reviews({ reviews, removeReview }: ReviewsProps) {
  return (
    <Flex mt={6} direction={"column"} gap={4}>
      {reviews?.map((review, index) => (
        <ReviewItem
          key={index}
          review={review}
          index={index}
          removeReview={removeReview}
        />
      ))}
    </Flex>
  );
}
