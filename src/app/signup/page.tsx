"use client";

import { Box, Flex, Button, Input, VStack } from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toaster } from "@/components/ui/toaster";

const Signup = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can add actual form submission logic here (API call, etc.)

    toaster.create({
      title: "Success!",
      description: "Thanks for signing up — we'll be in contact soon.",
      type: "success",
      duration: 3000,
    });

    // Redirect to home after 3 seconds
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  return (
    <Flex
      height="100dvh"
      bg="white"
      align={{ base: "start", sm: "center" }}
      justify="center"
      p={{ base: 6, sm: 12 }}
    >
      <Box mt={{ base: 20, sm: 100 }} width={400} maxW={400}>
        <form onSubmit={handleSubmit}>
          <VStack border="solid 1px" gap={4}>
            <Field.Root w="100%">
              <Field.Label color="black">Name</Field.Label>
              <Input placeholder="Name" />
            </Field.Root>
            <Field.Root>
              <Field.Label color="black">Email</Field.Label>
              <Input placeholder="me@example.com" />
            </Field.Root>
            <Field.Root>
              <Field.Label color="black">Number</Field.Label>
              <Input placeholder="123456789" />
            </Field.Root>
            <Button
              type="submit"
              colorPalette="teal"
              width="100%"
              mt={4}
              fontWeight="semibold"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Signup;
