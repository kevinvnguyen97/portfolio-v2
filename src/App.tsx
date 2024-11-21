import React from "react";

import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";

function App() {
  return (
    <Box margin={5}>
      <Navigation />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Box
                data-state="open"
                _open={{
                  animation: "fade-in",
                  transition: "ease-out",
                  animationDuration: "1s",
                }}
                paddingTop="40px"
              >
                <Home />
              </Box>
            }
          />
          <Route path="/about" />
          <Route path="/gallery" />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
