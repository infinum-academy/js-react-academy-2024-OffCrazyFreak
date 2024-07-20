import { Card, CardBody, Text, Heading, Image, Stack } from "@chakra-ui/react";

export default function ShowDetails({
  title,
  description,
  imageUrl,
  averageRating,
}: IShow) {
  return (
    <Card
      backgroundColor="whitesmoke"
      my={"2em"}
      borderRadius={"lg"}
      overflow={"hidden"}
    >
      <Image
        src={imageUrl}
        alt="Show thumbnail"
        fallbackSrc="https://via.placeholder.com/200x100"
      />

      <CardBody>
        <Stack spacing={4}>
          <Heading as="h2">{title}</Heading>

          <Text>{description}</Text>

          <Text fontSize="2xl" as="b">
            {averageRating
              ? "Average rating: " + averageRating.toFixed(2)
              : "No ratings yet..."}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
