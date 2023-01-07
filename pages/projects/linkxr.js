import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraphMain'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="LinkXR">
      <Container>
        <Title>
          LinkXR <Badge>2023</Badge>
        </Title>
        <P>
          A social site that allows users to link all their Virtual Reality,
          Augmented Reality and Mixed Reality accounts in one centralised,
          customisable, and public profile page that can be shared in one click.
          The site is in active beta development.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://linkxr.one/" target="_blank">
              https://linkxr.one <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Chrome, Firefox, Safari, Opera, PWA, and many more</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>React, NextJS, JavaScript, Firebase, MongoDB, Vercel</span>
          </ListItem>
          <ListItem>
            <Meta>Please Note</Meta>
            <span>
              The site is in rapid development and will open to the public once
              the database schema is finalised.
            </span>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/project-showcase/linkxr_01.webp"
          alt="The coming soon dashboard page"
        />
        <ProjectImage
          src="/images/project-showcase/linkxr_02.webp"
          alt="The dashboard site - a work in progress"
        />
        <ProjectImage
          src="/images/project-showcase/linkxr_03.webp"
          alt="The dashboard site - a work in progress"
        />
        <ProjectImage
          src="/images/project-showcase/linkxr_04.webp"
          alt="The dashboard site - a work in progress"
        />
      </Container>
    </Layout>
  )
}

export default Work
