import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
          Discord's most powerful image moderation solution, powered by
          Artificial Intelligence, sophisticated decision-making &amp; hashing
          algorithms and much more.
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
            <Link href="https://blog.unitedweco.de/celebrating-a-year-of-degore/" target="_blank">
              Celebrating a year of DeGore <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/project-showcase/degore_01.png"
          alt="DeGore logo"
        />
      </Container>
    </Layout>
  )
}

export default Work
