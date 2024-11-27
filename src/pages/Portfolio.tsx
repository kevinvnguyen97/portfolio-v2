import {
  Box,
  Button,
  Card,
  CardHeader,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { AdventureRoutesIcon } from "../components/AdventureRoutesIcon";
import { Links } from "../constants/links";

export const Portfolio = () => {
  return (
    <Box>
      <Card.Root flexDirection="row" maxW={{ smToLg: "100%", lg: "1/2" }}>
        <Image
          src="/images/adventure_routes_icon.png"
          maxW={200}
          bgColor="orange"
        />
        <Box>
          <CardHeader>
            <Heading>Adventure Routes</Heading>
          </CardHeader>
          <Card.Body>
            <Text>
              This application saves routes logged by any roadgeek or traveler.
            </Text>
            <br />
            <Text fontWeight="bold">Technologies Used</Text>
            <Text>
              Typescript, Google Maps API, ReactJS, MeteorJS, MongoDB, Chakra UI
              v2
            </Text>
          </Card.Body>
          <Card.Footer>
            <Link
              href={`${Links.GITHUB}/adventure-routes-v3`}
              target="_blank"
              _hover={{ textDecoration: "none" }}
            >
              <Button variant="subtle">
                <AiFillGithub /> Repo
              </Button>
            </Link>
            <Button variant="subtle">
              <AdventureRoutesIcon /> App
            </Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </Box>
  );
};
