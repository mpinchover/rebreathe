"use client";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  Image,
  Link as CHLink,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Package, Video, Stethoscope } from "lucide-react"; // or your choice of icons

import { useRouter } from "next/navigation";

import doctor_image from "./image_1.png";

const paddingProps = {
  paddingTop: { base: 10, sm: 10 },
  paddingLeft: { base: 4, sm: 5 },
  paddingRight: { base: 4, sm: 5 },
  paddingBottom: { base: 10, sm: 10 },
};

export default function Home() {
  const router = useRouter();
  return (
    <Flex
      color="gray.700"
      minHeight="100dvh"
      bg="white"
      align={{ base: "start", sm: "center" }}
      justify="center"
      flexDir={"column"}
      // p={{ base: 6, sm: 12 }}
    >
      <Flex
        mt={20}
        width="100%"
        bgColor="white"
        // paddingY={50}

        // p={{ base: 4, sm: 10 }}
        {...paddingProps}
        alignItems="center"
        justifyContent={"center"}
        // color="black"
      >
        <VStack
          align="start"
          width={{ base: 400, sm: 600 }}
          maxW={{ base: 400, sm: 600 }}
        >
          <Heading size="3xl">Pulmonary rehabilitation from home</Heading>
          <Box width="100%" mt={4}>
            <Flex align="center" mb={2}>
              <Package size={20} style={{ marginRight: 8 }} />
              <Heading size="lg">Equipment shipped to your home</Heading>
            </Flex>

            <Flex align="center" mb={2}>
              <Video size={20} style={{ marginRight: 8 }} />
              <Heading size="lg">Virtual therapy appointments</Heading>
            </Flex>

            <Flex align="center">
              <Stethoscope size={20} style={{ marginRight: 8 }} />
              <Heading size="lg">
                Consultations with pulmonary specialists
              </Heading>
            </Flex>

            <VStack mt={4} gapY={4}>
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
                backgroundColor="gray.700"
                // _hover={{}}
                // _hover={{ cursor: "pointer", bg: "gray.200" }} // force it
                onClick={() => router.push("/signup")}
              >
                Set up a session
              </Button>
              <Button
                cursor="pointer"
                p={{ base: 4, sm: 6 }}
                borderRadius="xl"
                width="100%"
                // borderColor="grey"
                variant="outline"
                fontWeight="semibold"
                fontSize={{ base: "sm", sm: "md" }}
                // color="grey"
                // _hover={{ backgroundColor: "white" }}
              >
                Get in contact
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Flex>

      <Flex
        width="100%"
        bgColor="gray.100"
        {...paddingProps}
        alignItems="center"
        justifyContent={"center"}
      >
        <VStack
          // border="solid 1px green"
          width={{ base: 400, sm: 600 }}
          maxW={{ base: 400, sm: 600 }}
          // border="solid 1px black"
          // gapY={4}
          fontSize={{ base: "sm", sm: "lg" }}
          color="gray.700"
          align="start"
        >
          <Heading>A typical session</Heading>

          <SimpleGrid
            // fontSize={"sm"}
            fontWeight="semibold"
            lineHeight={2}
            columns={2}
            w="100%"
          >
            <Box>
              <Text>Warm-up</Text>
              <Text>Aerobic training</Text>
              <Text>Resistance training</Text>
              <Text>Balance training</Text>
              <Text>Cool down</Text>
            </Box>
            <Box textAlign="right">
              <Text>5 min</Text>
              <Text>25 min</Text>
              <Text>25 min</Text>
              <Text>10 min</Text>
              <Text>5 min</Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Flex>

      <Flex
        width="100%"
        bgColor="white"
        {...paddingProps}
        alignItems="center"
        justifyContent={"center"}
      >
        <VStack
          width={{ base: 400, sm: 600 }}
          maxW={{ base: 400, sm: 600 }}
          gap={4}
          fontSize={{ base: "sm", sm: "lg" }}
          color="gray.700"
          align="start"
        >
          <Heading>12 session package</Heading>

          <SimpleGrid
            // fontSize={"sm"}
            fontWeight="semibold"
            lineHeight={2}
            columns={2}
            w="100%"
          >
            <Box>
              <Text>Session 1</Text>
              <Text>Sessions 2-5</Text>
              <Text>Session 6</Text>
              <Text>Session 7-11</Text>
              <Text>Session 12</Text>
            </Box>
            <Box textAlign="right">
              <Text>Intake</Text>
              <Text>Pulm. Rehabilitation</Text>
              <Text>Consultation</Text>
              <Text>Pulm. Rehabilitation</Text>
              <Text>Consultation</Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Flex>

      {/* Doctor Info Box */}
      <Flex
        width="100%"
        bgColor="gray.100"
        {...paddingProps}
        alignItems="center"
        justifyContent={"center"}
      >
        <VStack
          width={{ base: 400, sm: 600 }}
          maxW={{ base: 400, sm: 600 }}
          gap={4}
          fontSize={{ base: "sm", sm: "lg" }}
          color="gray.700"
          align="start"
        >
          <Flex align="center" gap={6} flexDir={"column"}>
            <Image
              src={doctor_image.src}
              alt="Dr. Zachary Pinchover"
              height={{ base: "80px", sm: "120px" }}
              width={{ base: "80px", sm: "120px" }}
              borderRadius="full"
              objectFit="cover"
            />
            <Text fontSize={{ base: "sm", sm: "md" }} color="gray.700">
              <CHLink
                href="https://www.linkedin.com/in/zackpinchover/"
                target="_blank"
                color="teal.600"
                fontWeight="semibold"
                _hover={{ textDecoration: "underline" }}
              >
                Dr Pinchover
              </CHLink>{" "}
              is a board certified pulmonologist who treats a wide range of
              complex pulmonary diseases and is excited to give you the best
              results and allow you to "ReBreathe" again.
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
}
