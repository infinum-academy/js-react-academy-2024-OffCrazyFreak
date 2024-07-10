"use client";

import styles from "./page.module.css";
import { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Container,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  Stack,
} from "@chakra-ui/react";

interface formData {
  review: string;
  rating: number;
}

export default function Home() {
  let [formData, setFormData] = useState("");

  function handleInputChange(e) {
    let inputValue = e.target.value;
    setFormData(inputValue);
  }

  return (
    <main>
      <Container maxW={"container.md"}>
        <form>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Review</FormLabel>
              <Textarea
                value={formData}
                onChange={handleInputChange}
                placeholder="Add review..."
                rows={5}
                resize={"none"}
                size="md"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Rating</FormLabel>
              <NumberInput max={5} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Stack>
        </form>

        <Flex mt={6} direction={"column"} gap={4}>
          <Card backgroundColor="whitesmoke" variant={"filled"}>
            <CardBody>
              <Flex direction={"column"} gap={"1.5rem"}>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>

                <Text>2/5</Text>
              </Flex>
            </CardBody>
          </Card>

          <Card backgroundColor="whitesmoke" variant={"filled"}>
            <CardBody>
              <Flex direction={"column"} gap={"1.5rem"}>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>

                <Text>2/5</Text>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </Container>
    </main>
  );
}
