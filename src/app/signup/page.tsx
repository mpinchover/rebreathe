"use client";

import {
  Box,
  Flex,
  Button,
  Input,
  VStack,
  Heading,
  InputAddon,
  InputGroup,
} from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toaster } from "@/components/ui/toaster";
const paddingProps = {
  paddingTop: { base: 10, sm: 10 },
  paddingLeft: { base: 4, sm: 5 },
  paddingRight: { base: 4, sm: 5 },
  paddingBottom: { base: 10, sm: 10 },
};

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
      minHeight="100dvh"
      bg="white"
      align={{ base: "start", sm: "center" }}
      //   justify="center"
      flexDir={"column"}
      color="gray.700"
      // p={{ base: 6, sm: 12 }}
    >
      <Flex
        width="100%"
        bgColor="white"
        // paddingY={50}

        // p={{ base: 4, sm: 10 }}
        mt={20}
        {...paddingProps}
        alignItems="center"
        justifyContent={"center"}
      >
        <VStack
          align="start"
          width={{ base: 400, sm: 600 }}
          maxW={{ base: 400, sm: 600 }}
        >
          <Heading color="gray.700" size="3xl">
            Sign up for sessions
          </Heading>
          <Heading color="gray.700" size="md">
            We will contact you soon for scheduling
          </Heading>
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <VStack color="black" width="100%" gap={4}>
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
                <InputGroup startAddon="+1">
                  <Input placeholder="123456789" />
                </InputGroup>
              </Field.Root>
              <Button
                // cursor="pointer"
                // as="span"
                p={{ base: 4, sm: 6 }}
                borderRadius="xl"
                width="100%"
                // backgroundColor="black"
                // color="white"
                fontWeight="semibold"
                fontSize={{ base: "sm", sm: "md" }}
                variant="solid"
                // _hover={{}}
                // _hover={{ cursor: "pointer", bg: "gray.200" }} // force it
                // onClick={() => router.push("/signup")}
                onClick={handleSubmit}
                backgroundColor="gray.700"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Signup;
