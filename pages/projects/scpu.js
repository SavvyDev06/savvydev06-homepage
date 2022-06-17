import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraphMain'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="SCP United">
      <Container>
        <Title>
          SCP United <Badge>2021</Badge>
        </Title>
        <P>
          A faithful remaster of the SCP Containment Breach game using elements
          and systems from the cancelled SCP Unity game. Currently in active
          development.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="http://www.scpunited.com/" target="_blank">
              http://www.scpunited.com/ (soon™) <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>
              Unity Game Engine, C#, Xsolla for the game launcher, GitHub for
              source control
            </span>
          </ListItem>
          <ListItem>
            <Meta>Community</Meta>
            <Link href="https://discord.gg/MBb4SAdkVf" target="_blank">
              Join our Discord Server <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/project-showcase/scpu_01.jpg"
          alt="One of the in-game rooms"
        />
        <ProjectImage
          src="/images/project-showcase/scpu_02.jpg"
          alt="A showcase image of a hallway"
        />
        <ProjectImage
          src="/images/project-showcase/scpu_03.jpg"
          alt="A showcase of the SCP-131 characters"
        />
        <ProjectImage
          src="/images/project-showcase/scpu_04.jpg"
          alt="One of the in-game hallways"
        />
        <ProjectImage
          src="/images/project-showcase/scpu_05.jpg"
          alt="A showcase of the camera feed systems in the game"
        />
      </Container>
    </Layout>
  )
}

export default Work
