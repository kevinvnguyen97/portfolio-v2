import {
  Box,
  Heading,
  HStack,
  IconButton,
  VStack,
  Link,
  Image,
} from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Links } from "../constants/links";

export const Home = () => {
  return (
    <Box alignContent="center">
      <HStack justifyContent="space-evenly">
        <VStack>
          <Heading size="5xl">Kevin Nguyen</Heading>
          <Heading size="xl">Full Stack React Developer</Heading>
          <HStack>
            <Link href={Links.LINKEDIN} target="_blank">
              <IconButton aria-label="Linkedin" variant="ghost" size="2xl">
                <AiFillLinkedin />
              </IconButton>
            </Link>
            <Link href={Links.GITHUB} target="_blank">
              <IconButton aria-label="Github" variant="ghost" size="2xl">
                <AiFillGithub />
              </IconButton>
            </Link>
          </HStack>
        </VStack>
        <Image src="/images/profile.jpeg" />
      </HStack>
    </Box>
  );
};
