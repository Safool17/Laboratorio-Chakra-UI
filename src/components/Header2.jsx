import React from "react";
import {
  Box,
  ChakraProvider,
  Heading,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";

function Header2() {
  return (
    <ChakraProvider>
      <Box
        bgImage="https://i.pinimg.com/236x/b4/a8/5c/b4a85cc28cbbca01b11eb282dac689e7.jpg"
        bgSize="cover"
        bgPosition="center"
        bgClip="padding-box"
        display="flex"
        h="300Px"
        w="200px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        filter="brightness(0.8)"
        marginTop="20px"
      >
        <Heading as="h1" size="sm" fontWeight="bold" color="white">
          DOMINA EL TERRENO
        </Heading>
        <Flex flexDirection="Column" gap="20px" marginTop="20px">
          <Button
            colorScheme="white"
            mt={4}
            sx={{
              background: "transparent",
              border: "2px solid white",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                background: "white",
                border: "1px solid white",
                color: "Black",
              },
            }}
          >
            Ver Detalles
          </Button>
          <Button
            colorScheme="white"
            mt={4}
            sx={{
              background: "transparent",
              border: "2px solid white",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                background: "white",
                border: "1px solid white",
                color: "Black",
              },
            }}
          >
            Ver video
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
export default Header2;
