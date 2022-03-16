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
import ParagraphLeftPadded from '../components/paragraphLeftPadded'
import ParagraphBio from '../components/paragraphBio'
import ParagraphHeading from '../components/paragraphHeading'
import CursiveHeading from '../components/cursiveHeading'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import HeadsUpToast from '../components/headsUpToast'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCakeCandles,
  faLaptopCode,
  faAnglesRight,
  faRightToBracket,
  faRocket,
  faGears,
  faC,
  faHashtag,
  faGlasses,
  faCalendarCheck,
  faAtom,
  faN,
  faFeather,
  faDatabase,
  faLeaf,
  faFeatherPointed,
  faShapes,
  faCarrot,
  faMusic,
  faClapperboard,
  faCheckToSlot
} from '@fortawesome/free-solid-svg-icons'

import {
  faJsSquare,
  faPython,
  faHtml5,
  faReact,
  faVuejs,
  faMicrosoft,
  faRust,
  faGolang,
  faDocker
} from '@fortawesome/free-brands-svg-icons'

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
          with a passion for creating useful software, to help improve our daily
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
          <FontAwesomeIcon icon={faCakeCandles} /> Born in Nicosia, Cyprus.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          <FontAwesomeIcon icon={faLaptopCode} /> Passed ECDL C++ Programming
          Course with distinction
        </BioSection>
        <BioSection>
          <BioYear>20??</BioYear>
          <FontAwesomeIcon icon={faAnglesRight} /> More to be added
        </BioSection>
        <BioSection>
          <BioYear>2021-present</BioYear>
          <FontAwesomeIcon icon={faRightToBracket} /> Joined the team at SCP
          United as a programmer
        </BioSection>
        <BioSection>
          <BioYear>2021-present</BioYear>
          <FontAwesomeIcon icon={faRocket} /> Founded DeGore, and work as a lead
          developer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          Languages
        </Heading>
        <ParagraphBio>
          <FontAwesomeIcon icon={faCheckToSlot} />{' '}
          <b>
            <u>Knowledgeable</u>
          </b>
          <ParagraphLeftPadded>
            <FontAwesomeIcon icon={faJsSquare} /> JavaScript
            <br />
            <FontAwesomeIcon icon={faGears} /> TypeScript
            <br />
            <FontAwesomeIcon icon={faC} /> C++
            <br />
            <FontAwesomeIcon icon={faHashtag} /> C# (dotnet)
            <br />
            <FontAwesomeIcon icon={faPython} /> Python
            <br />
            <FontAwesomeIcon icon={faHtml5} /> HTML&amp;CSS
          </ParagraphLeftPadded>
          <FontAwesomeIcon icon={faGlasses} />{' '}
          <b>
            <u>Learning</u>
          </b>{' '}
          <ParagraphMain>
            <FontAwesomeIcon icon={faGears} /> TypeScript <br />
          </ParagraphMain>
          <FontAwesomeIcon icon={faCalendarCheck} />{' '}
          <b>
            <u>Planned to Learn</u>
          </b>{' '}
          <ParagraphLeftPadded>
            <FontAwesomeIcon icon={faRust} /> Rust <br />
            <FontAwesomeIcon icon={faGolang} /> Go
          </ParagraphLeftPadded>
        </ParagraphBio>
      </Section>

      <Section delay={0.4}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          Frameworks
        </Heading>
        <ParagraphBio>
          <FontAwesomeIcon icon={faCheckToSlot} />{' '}
          <b>
            <u>Knowledgeable</u>
          </b>
          <ParagraphLeftPadded>
            <FontAwesomeIcon icon={faReact} /> React
            <br />
            <FontAwesomeIcon icon={faN} /> NextJS
            <br />
            <FontAwesomeIcon icon={faAtom} /> Electron
            <br />
            <FontAwesomeIcon icon={faVuejs} /> NuxtJS
          </ParagraphLeftPadded>
          <FontAwesomeIcon icon={faGlasses} />{' '}
          <b>
            <u>Learning</u>
          </b>{' '}
          <ParagraphLeftPadded>
            <FontAwesomeIcon icon={faFeather} /> Flutter
          </ParagraphLeftPadded>
          <FontAwesomeIcon icon={faCalendarCheck} />{' '}
          <b>
            <u>Planned to Learn</u>
          </b>{' '}
          <ParagraphMain>
            <FontAwesomeIcon icon={faMicrosoft} /> Xamarin
          </ParagraphMain>
        </ParagraphBio>
      </Section>

      <Section delay={0.5}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          Technologies (Tech Stacks)
        </Heading>
        <ParagraphBio>
          <FontAwesomeIcon icon={faCheckToSlot} />{' '}
          <b>
            <u>Knowledgeable</u>
          </b>
          <ParagraphLeftPadded>
            <FontAwesomeIcon icon={faDocker} /> Docker
            <br />
            <FontAwesomeIcon icon={faDatabase} /> PostgreSQL
            <br />
            <FontAwesomeIcon icon={faLeaf} /> MongoDB
            <br />
            <FontAwesomeIcon icon={faFeatherPointed} /> Apache Server (more to
            be added)
          </ParagraphLeftPadded>
          <FontAwesomeIcon icon={faCalendarCheck} />{' '}
          <b>
            <u>Planned to Learn</u>
          </b>{' '}
          <ParagraphLeftPadded>
            <FontAwesomeIcon icon={faShapes} /> Redis
          </ParagraphLeftPadded>
        </ParagraphBio>
      </Section>

      <Section delay={0.6}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          Software
        </Heading>
        <ParagraphBio>
          <FontAwesomeIcon icon={faCarrot} /> FL Studio
          <br />
          <FontAwesomeIcon icon={faMusic} /> Ableton Live
          <br />
          <FontAwesomeIcon icon={faClapperboard} /> Adobe Premiere Pro (more to
          be added)
        </ParagraphBio>
      </Section>

      <Section delay={0.7}>
        <Heading fontWeight="600" as="h3" variant="section-title">
          💜
        </Heading>
      </Section>
    </Container>
  )
}

export default Page
