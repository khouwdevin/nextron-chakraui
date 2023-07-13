import { Stack, Center, Text, Link, Image } from "@chakra-ui/react"
import NextLink from "next/link"

export default function Home() {
  return (
    <>
      <Stack alignItems="center" mb={5} mt={5}>
        <Image h={256} w={256} src="/images/electron.png"/>
        <Text fontWeight="bold" fontSize={40}>Electron</Text>
        <Text fontWeight="bold" fontSize={30}>+</Text>
        <Text fontWeight="bold" fontSize={40}>Next Js</Text>
        <Text fontWeight="bold" fontSize={30}>+</Text>
        <Text fontWeight="bold" fontSize={40}>Chakra UI</Text>
      </Stack>
      <Center>
        <Text fontSize={30}>
          <Link as={NextLink} alignSelf="center" href="/page1">Page 1</Link>
        </Text>
      </Center>
    </>
  );
};