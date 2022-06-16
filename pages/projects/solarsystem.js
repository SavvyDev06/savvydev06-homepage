import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraphMain'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Solar System Mobile App">
      <Container>
        <Title>
          Our Solar System <Badge>2016</Badge>
        </Title>
        <P>
          An app designed to teach you all about our solar system, with facts
          about every planet.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Download</Meta>
            <span>The app is no longer available on the app store.</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>Python, RenPy, XCode, Android Studio</span>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/project-showcase/images-coming-soon.png"
          alt="Images showcasing the app are coming soon"
        />
      </Container>
    </Layout>
  )
}

export default Work
