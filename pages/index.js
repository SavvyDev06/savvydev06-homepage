import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

import HelloText from '../components/helloText'

const Page = () => {
  const paragraphStyleObj = {
    fontSize: 18,
    fontFamily: 'Titillium Web',
    fontWeight: '400'
  }

  const introStyleObj = {
    fontSize: 28,
    fontFamily: 'Pacifico',
    background: 'linear-gradient(45deg, #f3ec78, #af4261)'
  }

  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue(
          'whiteAlpha.500',
          'purple.500'
        )} /* whiteAlpha.200 */
        p={3}
        mb={6}
        align="center"
      >
        <HelloText />
        <p style={paragraphStyleObj}>
          I&apos;m Savvy, a student enterpreneur from Cyprus!
        </p>
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
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/savvy.png"
            alt="My Profile Image!"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
