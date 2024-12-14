import { Box } from "@chakra-ui/react";
import { PortfolioCard } from "/components/PortfolioCard";
import { Links } from "/constants/links";

export const Portfolio = () => {
  return (
    <Box>
      <PortfolioCard
        title="Adventure Routes"
        description="This application saves routes logged by any roadgeek or traveler."
        technologiesUsed="Typescript, Google Maps API, ReactJS, MeteorJS, MongoDB, Chakra UI v2"
        repoUrl={`${Links.GITHUB}/adventure-routes-v3`}
        appUrl={Links.ADVENTURE_ROUTES}
        appImage="/images/adventure_routes_icon.png"
      />
    </Box>
  );
};
