import {
  Box,
  Heading,
  HStack,
  IconButton,
  VStack,
  Link,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import { Links } from "../constants/links";

const BIO = `Hello! I am Kevin. I am currently a software engineer with three
            years of professional development experience and a Bachelors of Science degree from Lewis University.
            Here I present some of my pet projects to demonstrate my skills.`;

export const Home = () => {
  return (
    <Box alignContent="center">
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection={{ smToMd: "column", mdTo2xl: "row" }}
        gap={5}
      >
        <VStack maxWidth={500}>
          <Heading size="5xl">Kevin Nguyen</Heading>
          <Heading size="2xl">Full Stack React Developer</Heading>
          <HStack>
            <AiOutlineGlobal />
            <Heading size="xl">Chicago, IL USA</Heading>
          </HStack>
          <Text textAlign="center">{BIO}</Text>
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
        <Image src="/images/profile.jpeg" maxHeight={440} />
      </Flex>
    </Box>
  );
};
