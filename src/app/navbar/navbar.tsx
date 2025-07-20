"use client";
import { Flex, Text, Link } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <Flex
      as="nav"
      p={4}
      //   bg="white"
      boxShadow="0 1px 4px rgba(0, 0, 0, 0.2)"
      align="center"
      position="absolute"
      width="100%"
    >
      <Link
        onClick={() => router.push("/")}
        _hover={{ textDecoration: "none" }}
      >
        <Text fontSize="xl" fontWeight="bold">
          <Text as="span" color="blue.400">
            Re
          </Text>
          <Text as="span" color="blue.500">
            Breathe
          </Text>
        </Text>
      </Link>
    </Flex>
  );
}
