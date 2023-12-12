import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraphMain'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="ProductImager">
      <Container>
        <Title>
          ProductImager <Badge>2023</Badge>
        </Title>
        <P>
          ProductImager automates the tedious and time-consuming process of
          manually sourcing & linking product images to product catalogues
          provided. Web store managers can effortlessly upload catalogues in CSV
          format, and the program dynamically adds image links by intelligently
          matching product names or serial numbers. Enhancing efficiency for
          countless businesses, ProductImager simplifies the task of creating
          visually appealing product listings.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Availability</Meta>
            <span>
              In private beta for an upcoming CY-based business, Tails & Trails.
              Limited availability for business owners interested in the
              service.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>NodeJS, ExpressJS, Google Custom Search Engine API</span>
          </ListItem>
          <ListItem mt={2}>
            <Box display="flex" alignItems="center">
              <Link
                href="mailto:productimager@unitedweco.de?cc=developer.savvasmica@gmail.com"
                target="_blank"
              >
                <Button
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="purple"
                  size={'sm'}
                >
                  Get Early Access Today
                </Button>
              </Link>
            </Box>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/product-imager-thumbnail.webp"
          alt="ProductImager logo"
        />
        <ProjectImage
          src="/images/project-showcase/product-imager_01.png"
          alt="The flow of ProductImager"
        />
      </Container>
    </Layout>
  )
}

export default Work
