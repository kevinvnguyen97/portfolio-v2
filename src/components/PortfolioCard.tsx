import {
  Card,
  Box,
  CardHeader,
  Heading,
  Button,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { AdventureRoutesIcon } from "/components/AdventureRoutesIcon";

type PortfolioCardProps = {
  title: string;
  description: string;
  technologiesUsed: string;
  repoUrl: string;
  appUrl: string;
  appImage: string;
};
export const PortfolioCard = (props: PortfolioCardProps) => {
  const { title, description, technologiesUsed, repoUrl, appUrl, appImage } =
    props;
  return (
    <Card.Root flexDirection="row" maxW={{ smToLg: "100%", lg: "1/2" }}>
      <Image src={appImage} maxW={200} bgColor="orange" />
      <Box>
        <CardHeader>
          <Heading>{title}</Heading>
        </CardHeader>
        <Card.Body>
          <Text>{description}</Text>
          <br />
          <Text fontWeight="bold">Technologies Used</Text>
          <Text>{technologiesUsed}</Text>
        </Card.Body>
        <Card.Footer>
          <Link
            href={repoUrl}
            target="_blank"
            _hover={{ textDecoration: "none" }}
          >
            <Button variant="subtle">
              <AiFillGithub /> Repo
            </Button>
          </Link>
          <Link
            href={appUrl}
            target="_blank"
            _hover={{ textDecoration: "none" }}
          >
            <Button variant="subtle">
              <AdventureRoutesIcon /> App
            </Button>
          </Link>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};
