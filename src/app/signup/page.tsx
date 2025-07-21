"use client";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

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
  paddingTop: { base: "50px", sm: "50px" },
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingBottom: { base: "50px", sm: "50px" },
};

const Signup = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    number: "",
  });

  const validate = () => {
    const errors: { name: string; email: string; number: string } = {
      name: "",
      email: "",
      number: "",
    };

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.number.trim()) {
      errors.number = "Mobile number is required.";
    } else if (!phoneRegex.test(formData.number)) {
      errors.number = "Enter a valid 10-digit number.";
    }

    setFormErrors(errors);
    return !Object.values(errors).some((errorMsg) => errorMsg !== "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const combinedErrors = Object.values(formErrors)
        .filter(Boolean)
        .join(" ");

      toaster.create({
        title: "Validation Error",
        description:
          combinedErrors || "Please fix the errors in the form fields.",
        type: "error",
        duration: 4000,
      });
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: formData.name,
        email: formData.email,
        number: formData.number,
      });

      setFormData({
        name: "",
        email: "",
        number: "",
      });

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
    } catch (e) {
      toaster.create({
        title: "Error",
        description: "Could not sign up. Please try again.",
        type: "error",
        duration: 3000,
      });
      console.error("Error adding document: ", e);
    }

    // You can add actual form submission logic here (API call, etc.)
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
              <Field.Root invalid={!!formErrors.name} w="100%">
                <Field.Label color="black">Name</Field.Label>
                <Input
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                />
                <Field.ErrorText>{formErrors.name}</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={!!formErrors.email}>
                <Field.Label color="black">Email</Field.Label>
                <Input
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="me@example.com"
                />
                <Field.ErrorText>{formErrors.email}</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={!!formErrors.number}>
                <Field.Label color="black">Number</Field.Label>
                <InputGroup startAddon="+1">
                  <Input
                    value={formData.number}
                    name="number"
                    onChange={handleChange}
                    placeholder="123456789"
                  />
                </InputGroup>
                <Field.ErrorText>{formErrors.number}</Field.ErrorText>
              </Field.Root>
              <Button
                width="100%"
                p="20px"
                borderRadius="xl"
                fontWeight="semibold"
                fontSize={{ base: "md", sm: "lg" }}
                variant="solid"
                color="gray.200"
                backgroundColor="gray.700"
                _hover={{ color: "white", backgroundColor: "grey.700" }}
                onClick={handleSubmit}
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
