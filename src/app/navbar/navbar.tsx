import { Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      p={{ base: 6, sm: 12 }}
      bg="white"
      boxShadow="0 1px 4px rgba(0, 0, 0, 0.2)"
      align="center"
      position="absolute"
      width="100%"
    >
      <Text fontSize="2xl" fontWeight="bold" color="gray.700">
        ReBreathe
      </Text>
    </Flex>
  );
}
