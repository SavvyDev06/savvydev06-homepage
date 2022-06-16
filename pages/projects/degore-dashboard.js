import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraphMain'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="DeGore Dashboard">
      <Container>
        <Title>
          DeGore Dashboard <Badge>2022</Badge>
        </Title>
        <P>
          A sleek and advanced web interface to configure DeGore, currently in
          the works. Coming soon, stay tuned!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://degore-dashboard.unitedweco.de" target="_blank">
              https://degore-dashboard.unitedweco.de{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Chrome, Firefox, Safari, Opera, and many more</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>React, TypeScript, MongoDB, Vercel</span>
          </ListItem>
          <ListItem>
            <Meta>In-Dev Version</Meta>
            <Link
              href="https://indev-degore-dashboard.unitedweco.de"
              target="_blank"
            >
              Visit the in-development (demo) version{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/project-showcase/degore-dashboard_01.jpg"
          alt="The coming soon dashboard page"
        />
        <ProjectImage
          src="/images/project-showcase/degore-dashboard_02.jpg"
          alt="The dashboard site - a work in progress"
        />
      </Container>
    </Layout>
  )
}

export default Work
