"use client";

import {
  Button,
  Heading,
  HStack,
  IconButton,
  VStack,
  DrawerRoot,
} from "@chakra-ui/react";
import {
  // DrawerRoot,
  DrawerBackdrop,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseTrigger,
} from "./ui/drawer";
import { useNavigate } from "react-router-dom";
import { ColorModeButton } from "./ui/color-mode";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Links = (props: { closeMenu?: () => void }) => {
  const { closeMenu } = props;
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => {
          if (closeMenu) closeMenu();
          navigate("/");
        }}
        variant="ghost"
        _hover={{ textDecoration: "none" }}
        size="xl"
      >
        Home
      </Button>
      <Button
        onClick={() => {
          navigate("/about");
          if (closeMenu) closeMenu();
        }}
        variant="ghost"
        _hover={{ textDecoration: "none" }}
        size="xl"
      >
        About Me
      </Button>
      <Button
        onClick={() => {
          navigate("/portfolio");
          if (closeMenu) closeMenu();
        }}
        variant="ghost"
        _hover={{ textDecoration: "none" }}
        size="xl"
      >
        Portfolio
      </Button>
      <Button
        onClick={() => {
          navigate("/contact");
          if (closeMenu) closeMenu();
        }}
        variant="ghost"
        _hover={{ textDecoration: "none" }}
        size="xl"
      >
        Contact
      </Button>
    </>
  );
};

const HamburgerMenu = (props: {
  isHamburgerMenuOpen: boolean;
  setIsHamburgerMenuOpen: (isOpen: boolean) => void;
}) => {
  const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = props;

  const closeMenu = () => {
    setIsHamburgerMenuOpen(false);
  };

  return (
    <DrawerRoot
      isOpen={isHamburgerMenuOpen}
      onOpenChange={(e: { open: boolean }) => setIsHamburgerMenuOpen(e.open)}
      placement="start"
    >
      <DrawerBackdrop />
      <DrawerTrigger>
        <IconButton variant="ghost" mdTo2xl={{ display: "none" }} size="xl">
          <AiOutlineMenu />
        </IconButton>
      </DrawerTrigger>
      {/* @ts-ignore */}
      <DrawerContent>
        <DrawerHeader>
          <Heading>Kevin Nguyen</Heading>
        </DrawerHeader>
        <DrawerBody>
          <VStack alignItems="start">
            <Links closeMenu={closeMenu} />
          </VStack>
        </DrawerBody>
        <DrawerFooter />
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export const Navigation = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  return (
    <HStack display="flex" justifyContent="space-between" marginBottom={5}>
      <HamburgerMenu
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
      />
      <HStack spaceX={5}>
        <Heading>Kevin Nguyen</Heading>
        <HStack display="none" md={{ display: "block" }}>
          <Links />
        </HStack>
      </HStack>
      <ColorModeButton />
    </HStack>
  );
};
