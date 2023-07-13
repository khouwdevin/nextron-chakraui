import { Stack, Link, Text, Center } from "@chakra-ui/react"
import NextLink from "next/link"

export default function Page1(){
    return(
        <>
            <Center height="100vh">
                <Stack alignItems="center">
                    <Text fontWeight="bold" fontSize={50}>Page 1</Text>
                    <Text fontWeight="bold" fontSize={30}>
                        <Link as={NextLink} href="/home">Go to home</Link>
                    </Text>
                </Stack>
            </Center>
        </>
    )
}