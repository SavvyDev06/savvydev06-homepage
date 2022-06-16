import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraphMain'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="DankPods API">
      <Container>
        <Title>
          DankPods API <Badge>2022</Badge>
        </Title>
        <P>
          A REST API designed to GET (receive from the community) and POST
          (randomly pick and send) quotes from a popular celebrity on the
          YouTube Platform, Wade Nixon.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>API Endpoint</Meta>
            <span>Releasing to the public in the future!</span>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/SavvyDev06/dankpods-api"
              target="_blank"
            >
              View it on GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>
              NodeJS, ExpressJS, Docker, Swagger Framework (OpenAPI
              Specification)
            </span>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/project-showcase/dankpods-api_01.png"
          alt="The DankPods API Logo"
        />
        <ProjectImage
          src="/images/project-showcase/dankpods-api_02.jpg"
          alt="The DankPods API Logo"
        />
        <SimpleGrid columns={2} gap={2}>
          <ProjectImage
            src="/images/project-showcase/dankpods-api_03.jpg"
            alt="Sending a GET Request to the REST API."
          />
          <ProjectImage
            src="/images/project-showcase/dankpods-api_04.jpg"
            alt="Sending a POST Request to the REST API."
          />
        </SimpleGrid>
        <ProjectImage
          src="/images/project-showcase/dankpods-api_05.jpg"
          alt="The DankPods API code in the IDE"
        />
      </Container>
    </Layout>
  )
}

export default Work
