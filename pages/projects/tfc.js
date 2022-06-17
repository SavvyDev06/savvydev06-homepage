import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraphMain'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="The Five Chapters">
      <Container>
        <Title>
          The Five Chapters <Badge>2019</Badge>
        </Title>
        <P>
          A survival 3D horror game experience with photorealistic graphics. The
          game unfortunately did not end up releasing to the public, but remains
          an impressive graphics tech demo and proof-of-concept.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>TRAILER</Meta>
            <Link
              href="https://www.youtube.com/watch?v=10tuQNguICA"
              target="_blank"
            >
              View on YouTube <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/MacOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>
              Unity Game Engine, C#, Xsolla for the game launcher, GitHub for
              source control
            </span>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/project-showcase/tfc_01.jpg"
          alt="The forest of The Five Chapters"
        />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/10tuQNguICA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
}

export default Work
