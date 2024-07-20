import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

interface ReviewFormProps {
  reviews: review[];
  setReviews: (reviews: review[]) => void;
}

export default function ReviewForm({ reviews, setReviews }: ReviewFormProps) {
  const [formData, setFormData] = useState<review>({
    comment: "",
    rating: null,
  });

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

  function isFormDataValid(formData: review) {
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

    setFormData({ comment: "", rating: null });
  }

  return (
    <form>
      <Stack spacing={4} align="center">
        <FormControl isRequired>
          <FormLabel>Review</FormLabel>
          <Textarea
            name="comment"
            value={formData.comment}
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
          type="submit"
          onClick={submitForm}
        >
          Post
        </Button>
      </Stack>
    </form>
  );
}
