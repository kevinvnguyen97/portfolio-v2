import { Heading, HStack, Link } from "@chakra-ui/react"

export const Navigation = () => {
    return <HStack spaceX={5}>
        <Heading>Kevin Nguyen</Heading>
        <Link href="/" variant="plain" _hover={{textDecoration: "none"}}>Home</Link>
        <Link href="/about" variant="plain" _hover={{textDecoration: "none"}}>About</Link>
        <Link href="/gallery" variant="plain" _hover={{textDecoration: "none"}}>Gallery</Link>
    </HStack>;
}