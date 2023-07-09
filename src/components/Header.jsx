import React from "react";
import {
  Box,
  ChakraProvider,
  Heading,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";

function Header() {
  return (
    <ChakraProvider>
      <Box
        bgImage="https://media.istockphoto.com/id/973722408/es/foto/silueta-de-ciclista-en-el-fondo-de-la-hermosa-puesta-de-sol.jpg?s=612x612&w=0&k=20&c=r4F--k88fCcP7z3TUlP0rth-bpMVl1ObwKOPMLvD40I="
        bgSize="cover"
        bgPosition="center"
        bgClip="padding-box"
        display="flex"
        h="400Px"
        w="800px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        filter="brightness(0.8)"
      >
        <Heading as="h1" size="lg" fontWeight="bold" color="white">
          DOMINA EL TERRENO
        </Heading>
        <Flex
          flexDirection="row"
          display="flex"
          gap="20px"
          justifyContent="space-between"
          marginTop="20px"
          width="30%"
        >
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

export default Header;
