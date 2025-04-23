import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  List,
  ListItem,
  Icon,
  Button,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
} from '@chakra-ui/react'
import Section from '../components/section'
import ParagraphMain from '../components/paragraphMain'
import ParagraphLeftPadded from '../components/paragraphLeftPadded'
import ParagraphBio from '../components/paragraphBio'
import ParagraphHeading from '../components/paragraphHeading'
import CursiveHeading from '../components/cursiveHeading'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import HeadsUpToast from '../components/headsUpToast'

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'

import thumbYouTube from '../public/images/links/youtube.png'
import thumbDeGore from '../public/images/projects/degore-thumbnail.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCakeCandles,
  faLaptopCode,
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
  faCheckToSlot,
  faMicrochip,
  faMicroscope,
  faTrophy,
  faMicrophoneAlt,
  faCube,
  faAngleDoubleRight,
  faLaptop,
  faHiking,
  faRobot,
  faSatelliteDish,
  faShuttleSpace,
  faGraduationCap,
  faCrosshairs,
  faUniversity,
  faChartGantt,
  faDroplet,
  faDragon,
  faShareNodes,
  faF
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
  faDocker,
  faUnity,
  faDiscord
} from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava'

const Page = () => {
  const introStyleObj = {
    color: 'white'
  }

  const bioSelectBG = useColorModeValue(
    'linear-gradient(45deg, #73C6E8, #A5FF8D)',
    'linear-gradient(45deg, #6C28C4, #73C6E8)'
  )

  return (
    <Layout>
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
            I&apos;m Savvy, a student entrepreneur from Cyprus!
          </ParagraphHeading>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" fontWeight="500" variant="page-title">
              Savvas M. Agisilaou
            </Heading>
            <ParagraphHeading>
              Software &amp; Game Developer, Amateur Radio Operator, Music
              Producer
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
            with a passion for creating useful software, to help improve our
            daily lives through the power of code.
          </ParagraphMain>
          <ParagraphMain>
            He often finds himself engineering hardware as well, such as printed
            circuit boards, 3D Prints / CAD, and regularly tinkers with Arduino
            and Raspberry Pi boards to make all sorts of cool stuff.
            <br />
          </ParagraphMain>
          <ParagraphMain style={{ fontWeight: '600' }}>
            Some of Savvy’s most notable software projects include{' '}
            <NextLink href="/projects/degore" scroll={false} passHref>
              <Link>DeGore</Link>
            </NextLink>
            ,{' '}
            <NextLink href="/projects/linkxr" scroll={false} passHref>
              <Link>LinkXR</Link>
            </NextLink>
            ,{' '}
            <NextLink href="/projects/tfc" scroll={false} passHref>
              <Link>The Five Chapters</Link>
            </NextLink>{' '}
            and{' '}
            <NextLink href="/projects/scpu" scroll={false} passHref>
              <Link>SCP United</Link>
            </NextLink>
            , as well as the{' '}
            <NextLink href="/projects/qckboard" scroll={false} passHref>
              <Link>QckBoard Macro+</Link>
            </NextLink>{' '}
            on the hardware side of things.
          </ParagraphMain>
          <Box align="center" my={4}>
            <NextLink href="/projects" passHref>
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
          <ParagraphMain>
            Select a section to learn more about Savvas's achievements
          </ParagraphMain>
          <Accordion defaultIndex={[3]} mt={2}>
            {/* Early Life Panel (2004-2012) */}
            <AccordionItem>
              <Heading as="h4">
                <AccordionButton
                  _expanded={{ bg: bioSelectBG, fontWeight: 'semibold' }}
                >
                  <Box as="span" flex="1" textAlign={'left'}>
                    Early Life (2004-2012)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                <BioSection>
                  <BioYear>2004</BioYear>
                  <FontAwesomeIcon icon={faCakeCandles} /> Born in Nicosia,
                  Cyprus.
                </BioSection>
                <BioSection>
                  <BioYear>2008</BioYear>
                  <FontAwesomeIcon icon={faLaptop} /> Started tinkering with a
                  laptop
                </BioSection>
                <BioSection>
                  <BioYear>2010</BioYear>
                  <FontAwesomeIcon icon={faRobot} /> Begun creating small robots
                  with LEGO Mindstorms
                </BioSection>
                <BioSection>
                  <BioYear>2012</BioYear>
                  <FontAwesomeIcon icon={faLaptopCode} /> Learnt to
                  &apos;code&apos; with Scratch on a Raspberry Pi
                </BioSection>
              </AccordionPanel>
            </AccordionItem>

            {/* Going Further with NASA (2015-2018) */}
            <AccordionItem>
              <Heading as="h4">
                <AccordionButton
                  _expanded={{ bg: bioSelectBG, fontWeight: 'semibold' }}
                >
                  <Box as="span" flex="1" textAlign={'left'}>
                    Going Further with NASA (2015-2018)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                <BioSection>
                  <BioYear>2015</BioYear>
                  <FontAwesomeIcon icon={faPython} /> Learnt the basics of
                  Python, and tinkered with other languages
                </BioSection>
                <BioSection>
                  <BioYear>2017</BioYear>
                  <FontAwesomeIcon icon={faUnity} /> Started creating games with
                  the Unity Game Engine (v2017.x)
                </BioSection>
                <BioSection>
                  <BioYear>2018</BioYear>
                  <FontAwesomeIcon icon={faMicrochip} /> Engineered &amp;
                  Programmed a fast line following car for the Robotex 2018
                  Arduino Line following competition (LlamasInPyjamas Team)
                </BioSection>
                <BioSection>
                  <BioYear>2018</BioYear>
                  <FontAwesomeIcon icon={faTrophy} /> Official Winner of the
                  Exclusive NASA &amp; CSEO Cyprus Space Apps Challenge 2018
                  (ASRocket Team) - Certificate Hand-Signed by{' '}
                  <Link
                    href="https://en.wikipedia.org/wiki/Anna_Lee_Fisher"
                    target="_blank"
                  >
                    Anna Lee Fisher (astronaut)
                  </Link>
                  !
                </BioSection>
                <BioSection>
                  <BioYear>2018</BioYear>
                  <FontAwesomeIcon icon={faLaptopCode} /> Passed ECDL C++
                  Programming Course &amp; Examinations with distinction
                </BioSection>
              </AccordionPanel>
            </AccordionItem>

            {/* Internships & Research (2019-2021) */}
            <AccordionItem>
              <Heading as="h4">
                <AccordionButton
                  _expanded={{ bg: bioSelectBG, fontWeight: 'semibold' }}
                >
                  <Box as="span" flex="1" textAlign={'left'}>
                    Internships & Research (2019-2021)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                <BioSection>
                  <BioYear>2019</BioYear>
                  <FontAwesomeIcon icon={faMicrochip} /> Engineered &amp;
                  Programmed a new speedy line following car for the Robotex
                  2019 Arduino Line following competition (FastAndFurious Team)
                </BioSection>
                <BioSection>
                  <BioYear>2019</BioYear>
                  <FontAwesomeIcon icon={faMicroscope} /> Interned at the RISE
                  (Interactive Media Smart Systems and Emerging Technologies)
                  Research Centre for STEM and Gaming
                </BioSection>
                <BioSection>
                  <BioYear>2019</BioYear>
                  <FontAwesomeIcon icon={faHiking} /> Completed the Duke of
                  Edinburgh Bronze Certification
                </BioSection>
                <BioSection>
                  <BioYear>2020</BioYear>
                  <FontAwesomeIcon icon={faMicroscope} /> Interned (once more!)
                  at the RiseUP Research Centre on Interactive Media Smart
                  Systems and Emerging Technologies &amp; successfully completed
                  the Gaming and Artificial Intelligence Scholars Program, with
                  all requirements passed for graduation
                </BioSection>
                <BioSection>
                  <BioYear>2021</BioYear>
                  <FontAwesomeIcon icon={faMusic} /> Passed Grade 5 ABRSM Music
                  Theory
                </BioSection>
              </AccordionPanel>
            </AccordionItem>

            {/* Entrepreneurship & University (2021-Present) */}
            <AccordionItem>
              <Heading as="h4">
                <AccordionButton
                  _expanded={{ bg: bioSelectBG, fontWeight: 'semibold' }}
                >
                  <Box as="span" flex="1" textAlign={'left'}>
                    Entrepreneurship & University (2021-Present)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                <BioSection>
                  <BioYear>2021-present</BioYear>
                  <FontAwesomeIcon icon={faRightToBracket} /> Joined the game
                  development team at SCP United as a programmer
                </BioSection>
                <BioSection>
                  <BioYear>2021-present</BioYear>
                  <FontAwesomeIcon icon={faRocket} /> Founded DeGore, an AI
                  Research startup company
                </BioSection>
                <BioSection>
                  <BioYear>2022</BioYear>
                  <FontAwesomeIcon icon={faAtom} /> Certified as the first ever
                  STEAM Ambassador in Cyprus
                </BioSection>
                <BioSection>
                  <BioYear>2022</BioYear>
                  <FontAwesomeIcon icon={faSatelliteDish} /> Certified as an
                  Amateur Radio Operator
                </BioSection>
                <BioSection>
                  <BioYear>2023</BioYear>
                  <FontAwesomeIcon icon={faGraduationCap} /> Graduated from The
                  Junior & Senior School
                </BioSection>
                <BioSection>
                  <BioYear>2023-2024</BioYear>
                  <FontAwesomeIcon icon={faCrosshairs} /> Served in the Cypriot
                  Army for 14 months at a special forces unit
                </BioSection>
                <BioSection>
                  <BioYear>2024-present</BioYear>
                  <FontAwesomeIcon icon={faUniversity} /> Studying Computer
                  Science at Newcastle University
                </BioSection>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
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
              <FontAwesomeIcon icon={faC} /> C++{' '}
              <b>(ECDL Certified - Expert Level, with Distinction)</b>
              <br />
              <FontAwesomeIcon icon={faHashtag} /> C# (dotnet)
              <br />
              <FontAwesomeIcon icon={faPython} /> Python
              <br />
              <FontAwesomeIcon icon={faJava} /> Java
              <br />
              <FontAwesomeIcon icon={faJsSquare} /> JavaScript
              <br />
              <FontAwesomeIcon icon={faGears} /> TypeScript
              <br />
              <FontAwesomeIcon icon={faHtml5} /> HTML&amp;CSS
            </ParagraphLeftPadded>
            <FontAwesomeIcon icon={faGlasses} />{' '}
            <b>
              <u>Learning</u>
            </b>{' '}
            <ParagraphLeftPadded>
              <FontAwesomeIcon icon={faC} /> C{' '}
              <b>(Proficient in fundamentals, growing experience)</b>
              <br />
              <FontAwesomeIcon icon={faGolang} /> Go
              <br />
            </ParagraphLeftPadded>
            <FontAwesomeIcon icon={faCalendarCheck} />{' '}
            <b>
              <u>Planned to Learn</u>
            </b>{' '}
            <ParagraphLeftPadded>
              <FontAwesomeIcon icon={faF} /> Fortran
              <br />
              <FontAwesomeIcon icon={faRust} /> Rust
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
              <FontAwesomeIcon icon={faChartGantt} /> TensorFlow
              <br />
              <FontAwesomeIcon icon={faDroplet} /> PyTorch
              <br />
              <FontAwesomeIcon icon={faReact} /> React
              <br />
              <FontAwesomeIcon icon={faN} /> NextJS
              <br />
              <FontAwesomeIcon icon={faAtom} /> Electron
            </ParagraphLeftPadded>
            <FontAwesomeIcon icon={faGlasses} />{' '}
            <b>
              <u>Learning</u>
            </b>{' '}
            <ParagraphLeftPadded>
              <FontAwesomeIcon icon={faDragon} /> Wails
              <br />
              <FontAwesomeIcon icon={faVuejs} /> NuxtJS
            </ParagraphLeftPadded>
            <FontAwesomeIcon icon={faCalendarCheck} />{' '}
            <b>
              <u>Planned to Learn</u>
            </b>{' '}
            <ParagraphLeftPadded>
              <FontAwesomeIcon icon={faMicrosoft} /> Xamarin
              <br />
              <FontAwesomeIcon icon={faFeather} /> Flutter
            </ParagraphLeftPadded>
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
              <FontAwesomeIcon icon={faFeatherPointed} /> Apache Server
            </ParagraphLeftPadded>
            <FontAwesomeIcon icon={faGlasses} />{' '}
            <b>
              <u>Learning</u>
            </b>{' '}
            <ParagraphLeftPadded>
              <FontAwesomeIcon icon={faShapes} /> Redis
            </ParagraphLeftPadded>
            <FontAwesomeIcon icon={faCalendarCheck} />{' '}
            <b>
              <u>Planned to Learn</u>
            </b>{' '}
            <ParagraphLeftPadded>
              <FontAwesomeIcon icon={faMicrochip} /> Verilog (FPGAs)
              <br />
              <FontAwesomeIcon icon={faShuttleSpace} /> SurrealDB
            </ParagraphLeftPadded>
          </ParagraphBio>
        </Section>

        <Section delay={0.6}>
          <Heading fontWeight="600" as="h3" variant="section-title">
            Software
          </Heading>
          <ParagraphBio>
            <FontAwesomeIcon icon={faCheckToSlot} />{' '}
            <b>
              <u>Knowledgeable</u>
            </b>
            <ParagraphLeftPadded>
              <FontAwesomeIcon icon={faMicrosoft} /> Visual Studio &amp; VS Code
              <br />
              <FontAwesomeIcon icon={faCube} /> JetBrains Software Suite
              <br />
              <FontAwesomeIcon icon={faShareNodes} /> EasyEDA (PCB Design)
              <br />
              <FontAwesomeIcon icon={faCarrot} /> FL Studio
              <br />
              <FontAwesomeIcon icon={faMusic} /> Ableton Live
              <br />
              <FontAwesomeIcon icon={faClapperboard} /> Adobe Premiere Pro
              <br />
              <FontAwesomeIcon icon={faMicrophoneAlt} /> Adobe Audition
              <br />
              <FontAwesomeIcon icon={faAngleDoubleRight} /> ...and much more!
            </ParagraphLeftPadded>
          </ParagraphBio>
        </Section>

        <Section delay={0.7}>
          <Heading fontWeight="600" as="h3" variant="section-title">
            I 💜
          </Heading>
          <ParagraphBio>
            Coding,{' '}
            <Link href="https://unitedweco.de/degore" target="_blank">
              Artificial Intelligence / Machine Learning
            </Link>
            , PCB Design, CAD, Music (Digital Composition &amp; Piano),
            Aerospace, Podcasts,{' '}
            <Link href="https://blog.unitedweco.de" target="_blank">
              Blogging
            </Link>
          </ParagraphBio>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/SavvyDev06" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @SavvyDev06
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/SavvyDev06" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @SavvyDev06
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/United_We_Code" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @United_We_Code
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://discord.com/users/335413012682899456"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<FontAwesomeIcon icon={faDiscord} size="sm" />}
                >
                  @SavvyDev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/SavvyDev06" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @SavvyDev06
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/channel/UCV-cdJV5CzsyqoykTdvDFnQ"
              title="United We Code"
              thumbnail={thumbYouTube}
            >
              My official YouTube Channel
            </GridItem>
            <GridItem
              href="https://unitedweco.de/degore"
              title="DeGore"
              thumbnail={thumbDeGore}
            >
              AI image moderation for communities on the Discord Platform
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
