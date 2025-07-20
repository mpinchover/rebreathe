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
import bg_image from "./bg_image_2.png";
import bg_image_3 from "./bg_image_3.png";

const paddingProps = {
  paddingTop: { base: "50px", sm: "50px" },
  paddingLeft: { base: "4px", sm: "10px" },
  paddingRight: { base: "4px", sm: "10px" },
  paddingBottom: { base: "50px", sm: "50px" },
};
const color = "gray.700";

const backgroundImage = {
  backgroundImage: `
        linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.9)),
        url(${bg_image.src})
      `,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
};

const MainHeader = () => {
  return (
    <VStack
      align="start"
      width={{ base: 400, sm: 600 }}
      maxW={{ base: 400, sm: 600 }}
    >
      <Heading fontWeight="normal" size="3xl">
        <Text fontWeight="semibold" as="span" color="blue.400">
          Customized
        </Text>{" "}
        pulmonary rehabilitation{" "}
        <Text fontWeight="semibold" as="span" color="blue.500">
          from home
        </Text>
      </Heading>
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
          <Heading size="lg">Consultations with pulmonary specialists</Heading>
        </Flex>
      </Box>
    </VStack>
  );
};

const MainButtons = () => {
  const router = useRouter();
  return (
    <VStack
      align="center"
      justify="space-between"
      width={{ base: 400, sm: 600 }}
      maxW={{ base: 400, sm: 600 }}
      gap={4}
    >
      <Button
        width="100%"
        p={{ base: "4px", sm: "6px" }}
        borderRadius="xl"
        fontWeight="semibold"
        fontSize={{ base: "sm", sm: "md" }}
        variant="solid"
        color="gray.200"
        backgroundColor="gray.700"
        _hover={{ color: "white", backgroundColor: "grey.700" }}
        onClick={() => router.push("/signup")}
      >
        Set up a session
      </Button>
      <Button
        width="100%"
        color="gray.700"
        borderColor="gray.700"
        cursor="pointer"
        p={{ base: "4px", sm: "6px" }}
        borderRadius="xl"
        variant="outline"
        fontWeight="semibold"
        fontSize={{ base: "sm", sm: "md" }}
        // color="grey"
        // _hover={{ backgroundColor: "white" }}
      >
        Get in contact
      </Button>
    </VStack>
  );
};

const TypicalSession = () => {
  return (
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
  );
};

const PackageTherapy = () => {
  return (
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
  );
};

export default function Home() {
  const router = useRouter();

  return (
    <Flex
      bg="white"
      align={{ base: "start", sm: "center" }}
      justify="center"
      flexDir={"column"}
      minHeight="100dvh"
      width="100%"
    >
      <Flex
        {...paddingProps}
        height="400px"
        width="100%"
        alignItems="center"
        justifyContent={"center"}
        backgroundColor="white"
      >
        <MainHeader />
      </Flex>

      <Flex
        {...paddingProps}
        height="400px"
        width="100%"
        alignItems="center"
        justifyContent={"center"}
        backgroundColor="gray.100"
      >
        <MainButtons />
      </Flex>

      <Flex
        {...paddingProps}
        width="100%"
        bgColor="white"
        alignItems="center"
        justifyContent={"center"}
      >
        <TypicalSession />
      </Flex>

      <Flex
        {...paddingProps}
        width="100%"
        bgColor="gray.100"
        alignItems="center"
        justifyContent={"center"}
      >
        <PackageTherapy />
      </Flex>

      {/* Doctor Info Box */}
      <Flex
        width="100%"
        bgColor="white"
        alignItems="center"
        justifyContent={"center"}
        {...paddingProps}
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
