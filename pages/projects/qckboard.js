import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraphMain'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="QckBoard Macro Keyboard">
      <Container>
        <Title>
          QckBoard Macro Plus <Badge>2021</Badge>
        </Title>
        <P>
          A custom-made macro keypad for enterprise and home use. The PCB was
          designed from scratch using the EasyEDA software, and manufactured by
          JLCPCB.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Demo</Meta>
            <Link href="https://youtu.be/Z3EFkClvtIk" target="_blank">
              View the product demo on YouTube <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Supports</Meta>
            <span>Windows, MacOS and Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>
              C++ (to program the Arduino), EasyEDA (to design the PCB), NodeJS
              and the Electron Framework (for the configuration / key-mapping
              app)
            </span>
          </ListItem>
          <ListItem>
            <Meta>Please Note</Meta>
            <span>
              I&apos;m really tired in the video below (it was recorded very
              early in the morning), so please excuse my sleepy voice.
            </span>
          </ListItem>
        </List>

        <AspectRatio maxW="640px" ratio={1.78} my={4}>
          <iframe
            src="https://www.youtube.com/embed/Z3EFkClvtIk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <ProjectImage
          src="/images/project-showcase/qckboard_01.png"
          alt="The feature picture of the board"
        />
        <ProjectImage
          src="/images/project-showcase/qckboard_02.png"
          alt="A picture of the board with the keycaps removed"
        />
        <SimpleGrid columns={2} gap={2}>
          <ProjectImage
            src="/images/project-showcase/qckboard_03.png"
            alt="A transparent picture of the board - front side"
          />
          <ProjectImage
            src="/images/project-showcase/qckboard_04.png"
            alt="A transparent picture of the board - back side"
          />
        </SimpleGrid>
        <ProjectImage
          src="/images/project-showcase/qckboard_05.png"
          alt="A picture of the board with the new PETG Plastic Keycaps"
        />
        <ProjectImage
          src="/images/project-showcase/qckboard_06.png"
          alt="The in-development schematic of the new board (with the ATMEGA 32U4-MU Microcontroller built-in)"
        />
        <ProjectImage
          src="/images/project-showcase/qckboard_07.png"
          alt="A design mockup of the new board"
        />
      </Container>
    </Layout>
  )
}

export default Work
