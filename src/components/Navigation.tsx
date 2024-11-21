import { Heading, HStack, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ColorModeButton } from "./ui/color-mode";

const Links = () => {
  const navigate = useNavigate();
  return (
    <>
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
      <Link
        onClick={() => navigate("/contact")}
        variant="plain"
        _hover={{ textDecoration: "none" }}
      >
        Contact
      </Link>
    </>
  );
};

export const Navigation = () => {
  return (
    <HStack display="flex" justifyContent="space-between" marginBottom={5}>
      <HStack spaceX={5}>
        <Heading>Kevin Nguyen</Heading>
        <Links />
      </HStack>
      <ColorModeButton />
    </HStack>
  );
};
