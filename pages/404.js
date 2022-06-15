import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Uh oh...</Heading>
      <Text>The page you were looking for could not be found.</Text>
      <Text>Sorry for the inconvenience :(</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="purple">Hitch a ride back home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
