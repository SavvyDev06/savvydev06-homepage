import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Button
} from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraphMain'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="DeGore">
      <Container>
        <Title>
          DeGore <Badge>2021</Badge>
        </Title>
        <P>
          Discord&apos;s most powerful image moderation solution, powered by
          Artificial Intelligence, sophisticated decision-making &amp; hashing
          algorithms and much more.
        </P>
        <P>
          DeGore is currently protecting ~1M users in thousands of communities
          around the world. Not only does DeGore help prevent users from being
          exposed to harmful content, but it also protects marginalised groups
          from targeted attacks.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://unitedweco.de/degore" target="_blank">
              https://unitedweco.de/degore <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/MacOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>
              NodeJS, DiscordJS, Docker, MongoDB, PostgreSQL, React TypeScript
              (web dashboard), ExpressJS (API), Stripe (linked to Chargebee),
              Datadog (monitoring)
            </span>
          </ListItem>
          <ListItem>
            <Meta>Blog Post</Meta>
            <Link
              href="https://blog.unitedweco.de/celebrating-a-year-of-degore/"
              target="_blank"
            >
              Celebrating a year of DeGore <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Documentation</Meta>
            <Link href="https://degore-docs.unitedweco.de" target="_blank">
              View the documentation and user guide here{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem mt={2}>
            <Link
              href="mailto:invest@unitedweco.de?cc=developer.savvasmica@gmail.com"
              target="_blank"
            >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                Investor? Shoot us an email.
              </Button>
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/project-showcase/degore_01.png"
          alt="The official DeGore website"
        />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/40D1wtBdxyQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/4y470jnDkdo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <ProjectImage
          src="/images/project-showcase/degore_02.png"
          alt="A list of just some of DeGore's many offerings"
        />
      </Container>
    </Layout>
  )
}

export default Work
