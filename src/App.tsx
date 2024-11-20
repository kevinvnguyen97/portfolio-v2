import React from "react";

import { ColorModeProvider } from "./components/ui/color-mode";
import { Box, ChakraProvider, createSystem, defaultConfig, Text } from "@chakra-ui/react";
import { Navigation } from "./components/Navigation";

const system = createSystem(defaultConfig, {});

function App() {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <Box margin={5}>
          <Navigation />
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
