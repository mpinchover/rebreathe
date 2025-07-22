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
  paddingLeft: "20px",
  paddingRight: "20px",
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
      // align="center"
      // width={{ base: 300, sm: 600 }}
      // maxW={{ base: 300, sm: 600 }}
      maxW={{ base: "100%", sm: "600px" }}
      gap={"30px"}
    >
      <Heading
        margin={0}
        // border="solid 1px blue"
        // textAlign={{ base: "center", sm: "start" }}
        fontWeight="normal"
        size="4xl"
      >
        <Text fontWeight="semibold" as="span" color="blue.400">
          Customized
        </Text>{" "}
        pulmonary rehabilitation{" "}
        <Text fontWeight="semibold" as="span" color="blue.500">
          from home
        </Text>
      </Heading>
      <VStack
        margin={0}
        // border="solid 1px blue"
        alignItems="start"
        width="100%"
      >
        <Flex align="center" mb={2}>
          <Package size={20} style={{ marginRight: 8 }} />
          <Heading size="md">Equipment shipped to your home</Heading>
        </Flex>

        <Flex align="center" mb={"2px"}>
          <Video size={20} style={{ marginRight: 8 }} />
          <Heading size="md">Virtual therapy appointments</Heading>
        </Flex>

        <Flex align="center">
          <Stethoscope size={20} style={{ marginRight: 8 }} />
          <Heading size="md">Consultations with pulmonary specialists</Heading>
        </Flex>
      </VStack>
      <MainButtons />
    </VStack>
  );
};

const MainButtons = () => {
  const router = useRouter();
  return (
    <VStack
      width="100%"
      // maxW={{ base: "100%", sm: "600px" }}
      gap={"10px"}
      // mt={"30px"}
      // border="solid 1px blue"
      // border="solid 1px red"
    >
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
        onClick={() => router.push("/signup")}
      >
        Set up a session
      </Button>
      <Button
        width="100%"
        color="gray.700"
        borderColor="gray.700"
        cursor="pointer"
        p="20px"
        borderRadius="xl"
        variant="outline"
        fontWeight="semibold"
        fontSize={{ base: "md", sm: "lg" }}
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
      width="100%"
      maxW={{ base: "100%", sm: "600px" }}
      // border="solid 1px black"
      // gapY={4}
      fontSize={{ base: "sm", sm: "lg" }}
      color="gray.700"
      align="start"
    >
      <Heading size={{ base: "2xl", sm: "3xl" }}>A typical session</Heading>

      <SimpleGrid
        // mt={"20px"}
        fontSize={{ base: "sm", sm: "md" }}
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
      width="100%"
      maxW={{ base: "100%", sm: "600px" }}
      gap={4}
      fontSize={{ base: "sm", sm: "lg" }}
      color="gray.700"
      align="start"
    >
      <Heading size={{ base: "2xl", sm: "3xl" }}>12 session package</Heading>

      <SimpleGrid
        fontSize={{ base: "sm", sm: "md" }}
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

const Bio = () => {
  return (
    <VStack
      width="100%"
      maxW={{ base: "100%", sm: "600px" }}
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
          is a board certified pulmonologist who treats a wide range of complex
          pulmonary diseases and is excited to give you the best results and
          allow you to "ReBreathe" again.
        </Text>
      </Flex>
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
        // height="400px"
        paddingTop="100px"
        width="100%"
        alignItems="center"
        justifyContent={"center"}
        backgroundColor="white"
        flexDirection="column"
      >
        <MainHeader />
        {/* <MainButtons /> */}
      </Flex>
      <Flex
        width="100%"
        bgColor="gray.100"
        alignItems="center"
        justifyContent={"center"}
        {...paddingProps}
      >
        <Bio />
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
    </Flex>
  );
}
