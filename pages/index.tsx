import  { Flex, Heading, Stack, Image, Text, Link, Button } from '@chakra-ui/react';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Flex w={"100vw"} h={"95vh"} top={"50%"} alignItems={"center"} justifyContent={"center"}>
        <Stack justifyContent={"center"} alignItems={"center"} spacing={8}>
          <Image src="logo.png" w="128px" h="128px" />
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Heading>
              Be right back.
            </Heading>
            <Text textAlign={"center"} color="#8F9094">           tygr.dev is under maintenance. <br /> Please check back later.
            </Text>
            <Link href="https://beta.tygr.dev" pt={"2rem"}>
              <Button bg={"#fff"} color={"#000"}>
                Bleeding Edge (Beta)
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Text textAlign={"center"} color="#8F9094">
        <Link href="https://twitter.com/tygerxqt" isExternal>Twitter</Link>
        {" "}•{" "}
        <Link href="https://instagram.com/tygerxqt" isExternal>Instagram</Link>
        {" "}•{" "}
        <Link href="https://discord.gg/BJ8sWHntYb" isExternal>Discord</Link>
      </Text>
    </>
  )
}

export default Home;
