import { Card, CardBody, Flex, Text } from "@chakra-ui/react";

interface ReviewsProps {
  reviews: review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <Flex mt={6} direction={"column"} gap={4}>
      {reviews?.map((review, index) => (
        <Card backgroundColor="whitesmoke" key={index}>
          <CardBody>
            <Flex direction={"column"} gap={"1.5em"}>
              <Text>{review?.text}</Text>
              <Text>{review?.rating}/5</Text>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
}
