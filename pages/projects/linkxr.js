import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
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
          This way, you can stay connected with your friends, no matter where
          you met through a custom profile link that's unique to you.
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
            <span>Available on all web browsers for Desktop & Mobile</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>React, NextJS, JavaScript, Firebase, MongoDB, Vercel</span>
          </ListItem>
          <ListItem mt={2}>
            <Box display="flex" alignItems="center">
              <Link
                href="https://linkxr.one/profile/SavvyDev06"
                target="_blank"
              >
                <Button
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="purple"
                  size={'sm'}
                >
                  View an example profile
                </Button>
              </Link>
            </Box>
          </ListItem>
        </List>

        <ProjectImage
          src="https://cdn.linkxr.one/promo_images/ProfilePage.webp"
          alt="Savvy's profile page on LinkXR"
        />
        <ProjectImage
          src="https://cdn.linkxr.one/promo_images/ProfilesPage_Main.webp"
          alt="The Public Profiles page on LinkXR"
        />
        <ProjectImage
          src="https://cdn.linkxr.one/promo_images/DashboardDemo.webp"
          alt="LinkXR's Profile Dashboard page"
        />
        <ProjectImage
          src="https://cdn.linkxr.one/promo_images/LoginPage.webp"
          alt="The login page for LinkXR"
        />
      </Container>
    </Layout>
  )
}

export default Work
