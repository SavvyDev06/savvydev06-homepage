import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import ParagraphMain from '../components/paragraphMain'
import ParagraphHeading from '../components/paragraphHeading'

import CursiveHeading from '../components/cursiveHeading'

const Page = () => {
  const introStyleObj = {
    color: 'white'
  }

  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue(
          'linear-gradient(45deg, #73C6E8, #A5FF8D)',
          'linear-gradient(45deg, #6C28C4, #73C6E8)'
        )} /* whiteAlpha.200 */
        p={3}
        mb={6}
        align="center"
      >
        <CursiveHeading>Hello,</CursiveHeading>
        <ParagraphHeading style={introStyleObj}>
          I&apos;m Savvy, a student enterpreneur from Cyprus!
        </ParagraphHeading>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" fontWeight="500" variant="page-title">
            Savvas M. Agisilaou
          </Heading>
          <ParagraphHeading>
            Digital Creator ( Software &amp; Game Developer / Music Producer )
          </ParagraphHeading>
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
      <Section delay={0.1}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          Work
        </Heading>
        <ParagraphMain>Paragraph</ParagraphMain>
      </Section>
    </Container>
  )
}

export default Page
