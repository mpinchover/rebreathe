import { Box, Button, Flex, Text, VStack, Image } from "@chakra-ui/react";
import doctor_image from "./image_1.png";

export default function Home() {
  return (
    <Flex height="100vh" bg="white" align="center" justify="center" p={12}>
      <Box mt={10} maxW={400}>
        <Box fontSize="lg" color="gray.700" lineHeight={2}>
          <Text as="p">Online virtual pulmonary rehab therapy.</Text>
          <Text as="p">Customized sessions for each patient.</Text>
          <Text as="p">Weekly analysis by board-certified pulmonologist.</Text>
        </Box>

        <VStack spacing={4} mt={6}>
          <Button
            p={6}
            borderRadius="xl"
            width="100%"
            backgroundColor="black"
            color="white"
            // colorScheme="black"
            variant="solid" // solid = filled background
            fontWeight="semibold"
            fontSize="md"
            _hover={{}}
          >
            Set up a session
          </Button>
          <Button
            p={6}
            borderRadius="xl"
            width="100%"
            // colorScheme="teal"
            borderColor="grey"
            variant="outline" // outline = bordered
            fontWeight="semibold"
            fontSize="md"
            color="grey"
            _hover={{ backgroundColor: "white" }}
          >
            Get in contact
          </Button>
        </VStack>

        {/* Doctor Info Box */}
        <Box mt={6} bg="gray.50" p={6} borderRadius="lg">
          <Flex align="center" gap={6}>
            <Image
              src={doctor_image.src}
              alt="Dr. Zachary Pinchover"
              height="120px"
              width="120px"
              borderRadius="full"
              objectFit="cover"
            />
            <Text color="gray.700">
              Dr. Zachary Pinchover is a Pulmonary and Critical Care Physician
              specializing in Advanced Lung Diseases.
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
