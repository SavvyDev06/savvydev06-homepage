import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbDeGore from '../public/images/projects/degore-thumbnail.png'
import thumbSCPU from '../public/images/projects/scpu-thumbnail.png'
import thumbTFC from '../public/images/projects/tfc-thumbnail.png'
import thumbSolarSystem from '../public/images/projects/solarsystem-thumbnail.jpg'
import thumbONABLC from '../public/images/projects/onablc-thumbnail.png'
import thumbDeGoreDash from '../public/images/projects/degore-dashboard-thumbnail.png'
import thumbDankAPI from '../public/images/projects/dank-api-thumbnail.png'
import thumbQckBoard from '../public/images/projects/qckboard-macro-plus-thumbnail.png'
import thumbLinkXR from '../public/images/projects/linkxr-thumbnail.webp'
import thumbProductImager from '../public/images/projects/product-imager-thumbnail.webp'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading fontWeight="600" as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem id="degore" title="DeGore" thumbnail={thumbDeGore}>
              The most advanced AI-Powered image moderation solution for online
              communities, protecting over 1M users
            </ProjectGridItem>
          </Section>

          <Section delay={0.1}>
            <ProjectGridItem id="linkxr" title="LinkXR" thumbnail={thumbLinkXR}>
              A social site for VR, AR and MR users to connect their accounts
              across social platforms in a single, unified profile
            </ProjectGridItem>
          </Section>

          <Section delay={0.2}>
            <ProjectGridItem
              id="qckboard"
              title="QckBoard Macro Plus"
              thumbnail={thumbQckBoard}
            >
              A custom-made macro keypad for enterprise and home use (featuring
              a custom-made PCB)
            </ProjectGridItem>
          </Section>

          <Section delay={0.3}>
            <ProjectGridItem
              id="tfc"
              title="The Five Chapters"
              thumbnail={thumbTFC}
            >
              An immersive 3D horror experience
            </ProjectGridItem>
          </Section>

          <Section delay={0.4}>
            <ProjectGridItem
              id="product-imager"
              title="ProductImager"
              thumbnail={thumbProductImager}
            >
              Seamlessly add images to products on your web store without the
              hassle of individually sourcing, downloading, and uploading -
              automated for efficiency.
            </ProjectGridItem>
          </Section>

          <Section delay={0.5}>
            <ProjectGridItem
              id="dankpods-api"
              title="DankPods API"
              thumbnail={thumbDankAPI}
            >
              An Express REST API used to get random comedic quotes from
              dankpods videos
            </ProjectGridItem>
          </Section>

          <Section delay={0.6}>
            <ProjectGridItem
              id="degore-dashboard"
              title="DeGore Dashboard"
              thumbnail={thumbDeGoreDash}
            >
              A sleek and advanced web dashboard to conveniently interface with
              and configure DeGore
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.6}>
          <Divider my={6} />
          <Heading fontWeight="600" as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.7}>
            <ProjectGridItem id="scpu" title="SCP United" thumbnail={thumbSCPU}>
              A faithful remaster of the SCP Containment Breach game using
              elements and systems from the cancelled SCP Unity game
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.8}>
          <Divider my={6} />
          <Heading fontWeight="600" as="h3" fontSize={20} mb={4}>
            Past Projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.9}>
            <ProjectGridItem
              id="solarsystem"
              title="Our Solar System"
              thumbnail={thumbSolarSystem}
            >
              An app designed to teach you all about our Solar System
            </ProjectGridItem>
          </Section>

          <Section delay={0.1}>
            <ProjectGridItem
              id="onablc"
              title="One Night at Baldi's Literature Club"
              thumbnail={thumbONABLC}
            >
              Combining Baldi&apos;s Basics, Doki Doki Literature Club, and Five
              Nights At Freddy&apos;s into one single-player horror experience
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
