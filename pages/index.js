import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import ParagraphMain from '../components/paragraphMain'
import ParagraphHeading from '../components/paragraphHeading'
import CursiveHeading from '../components/cursiveHeading'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import HeadsUpToast from '../components/headsUpToast'

const Page = () => {
  const introStyleObj = {
    color: 'white'
  }

  return (
    <Container>
      <HeadsUpToast />
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
        <ParagraphMain>
          Savvas – better known as Savvy – is a full-stack software developer
          with a passion of creating useful software, to help improve our daily
          lives through the power of code.
          <br />
          He often finds himself engineering hardware as well, such as printed
          circuit boards, 3D Prints / CAD, and regularly tinkers with Arduino
          and Raspberry Pi boards to make all sorts of cool stuff.
          <br />
          Some of Savvy’s most notable software projects include{' '}
          <NextLink href="/projects/degore">
            <Link>DeGore</Link>
          </NextLink>
          ,{' '}
          <NextLink href="/projects/tfc">
            <Link>The Five Chapters</Link>
          </NextLink>{' '}
          and{' '}
          <NextLink href="/projects/scpu">
            <Link>SCP United</Link>
          </NextLink>
          , as well as the{' '}
          <NextLink href="/projects/qckboard">
            <Link>QckBoard Macro+</Link>
          </NextLink>{' '}
          on the hardware side of things.
        </ParagraphMain>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Born in Nicosia, Cyprus.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Passed ECDL C++ Programming Course with distinction
        </BioSection>
        <BioSection>
          <BioYear>20??</BioYear>
          More to be added soon
        </BioSection>
      </Section>

      <Section delay={0.1}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          Languages
        </Heading>
        <ParagraphMain>JavaScript, C++</ParagraphMain>
      </Section>

      <Section delay={0.1}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          Frameworks
        </Heading>
        <ParagraphMain>React, NextJS, Electron, NuxtJS</ParagraphMain>
      </Section>

      <Section delay={0.1}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          Tech Stacks
        </Heading>
      </Section>

      <Section delay={0.1}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          Software
        </Heading>
        <ParagraphMain>Docker (more to be added)</ParagraphMain>
      </Section>
    </Container>
  )
}

export default Page
