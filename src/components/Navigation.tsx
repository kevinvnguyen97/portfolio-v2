import { Heading, HStack, Link, Box, IconButton } from "@chakra-ui/react";
import { AiFillSun, AiFillMoon } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useColorMode } from "./ui/color-mode";

export const Navigation = () => {
  const navigate = useNavigate();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack display="flex" justifyContent="space-between" marginBottom={5}>
      <HStack spaceX={5}>
        <Heading>Kevin Nguyen</Heading>
        <Link
          onClick={() => navigate("/")}
          variant="plain"
          _hover={{ textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          onClick={() => navigate("/about")}
          variant="plain"
          _hover={{ textDecoration: "none" }}
        >
          About
        </Link>
        <Link
          onClick={() => navigate("/gallery")}
          variant="plain"
          _hover={{ textDecoration: "none" }}
        >
          Gallery
        </Link>
      </HStack>
      <Box>
        <IconButton onClick={toggleColorMode}>
          {colorMode === "dark" ? <AiFillSun /> : <AiFillMoon />}
        </IconButton>
      </Box>
    </HStack>
  );
};
