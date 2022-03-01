import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  const paragraphStyleObj = {
    fontSize: 18,
    fontFamily: 'Titillium Web',
    fontWeight: '400'
  }

  return (
    <Container>
      <Box borderRadius="lg" bg="purple" p={3} mb={6} align="center">
        Hello, I&apos;m Savvy, a student enterpreneur from Cyprus!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" fontWeight="500" variant="page-title">
            Savvas M. Agisilaou
          </Heading>
          <p style={paragraphStyleObj}>
            Digital Creator ( Software &amp; Game Developer / Music Producer )
          </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
