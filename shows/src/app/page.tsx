"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Text,
  Container,
  Flex,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  Stack,
  Image,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";

interface formData {
  text: string;
  rating: number | null;
}

export default function Home() {
  const [formData, setFormData] = useState<formData>({
    text: "",
    rating: null,
  });
  const [reviews, setReviews] = useState<formData[]>([]);

  function handleChange(e: any) {
    const { name, value } = e.target;

    let inputValue = value;
    if (inputValue === " ") {
      inputValue = inputValue.trim();
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  }

  function isFormDataValid(formData: formData) {
    for (const [key, value] of Object.entries(formData)) {
      if (value === "" || value === null || value === undefined) {
        return false;
      }
    }
    return true;
  }

  function submitForm() {
    if (!isFormDataValid(formData)) {
      return;
    }

    const newReviews = [...reviews, formData];
    localStorage.setItem("reviews", JSON.stringify(newReviews));
    setReviews(newReviews);

    setFormData({ text: "", rating: null });
  }

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    setReviews(storedReviews);
  }, []);

  return (
    <main>
      <Container maxW={"container.md"} my={"2em"}>
        <Heading as="h1">TV shows APP</Heading>

        <Card
          backgroundColor="whitesmoke"
          my={"2em"}
          borderRadius={"lg"}
          overflow={"hidden"}
        >
          <Image
            src="./shutter-island.jpg"
            alt="Show thumbnail"
            fallbackSrc="https://via.placeholder.com/200x100"
          />

          <CardBody>
            <Heading as="h2">Shutter Island</Heading>

            <Text pt={"2em"}>
              Teddy Daniels and Chuck Aule, two US marshals, are sent to an
              asylum on a remote island in order to investigate the
              disappearance of a patient, where Teddy uncovers a shocking truth
              about the place.
            </Text>
          </CardBody>
        </Card>

        <form>
          <Stack spacing={4} align="center">
            <FormControl isRequired>
              <FormLabel>Review</FormLabel>
              <Textarea
                name="text"
                value={formData.text}
                onChange={handleChange}
                placeholder="Add review..."
                rows={5}
                resize={"none"}
                size="md"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Rating</FormLabel>
              <NumberInput
                name="rating"
                value={formData.rating || ""}
                onChange={(value) =>
                  handleChange({ target: { name: "rating", value } })
                }
                min={1}
                max={5}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Button
              colorScheme="purple"
              size={"lg"}
              my={"0.5em"}
              px={"2em"}
              onClick={submitForm}
            >
              Post
            </Button>
          </Stack>
        </form>

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
      </Container>
    </main>
  );
}
