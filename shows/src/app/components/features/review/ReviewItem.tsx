import { Card, CardBody, Flex, Text, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface ReviewItemProps {
  review: review;
  index: number;
  removeReview: (index: number) => void;
}

export default function ReviewItem({
  review,
  index,
  removeReview,
}: ReviewItemProps) {
  return (
    <Card backgroundColor="whitesmoke">
      <CardBody>
        <Flex direction={"column"} gap={"1.5em"}>
          <Flex gap={"1em"}>
            <Text flexGrow={1} wordBreak={"break-word"}>
              {review?.comment}
            </Text>

            <IconButton
              aria-label="Remove review"
              colorScheme="red"
              size={"sm"}
              icon={<CloseIcon />}
              onClick={() => removeReview(index)}
            />
          </Flex>
          <Text>{review?.rating}/5</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
