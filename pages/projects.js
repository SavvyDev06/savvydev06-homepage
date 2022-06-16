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

import HeadsUpToast from '../components/headsUpToast'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <HeadsUpToast />
        <Heading fontWeight="600" as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem id="degore" title="DeGore" thumbnail={thumbDeGore}>
              The most advanced AI-Powered image moderation solution for
              communities on the Discord Platform
            </ProjectGridItem>
          </Section>

          <Section delay={0.1}>
            <ProjectGridItem
              id="tfc"
              title="The Five Chapters"
              thumbnail={thumbTFC}
            >
              An immersive 3D horror experience.
            </ProjectGridItem>
          </Section>

          <Section delay={0.2}>
            <ProjectGridItem
              id="degore-dashboard"
              title="DeGore Dashboard"
              thumbnail={thumbDeGoreDash}
            >
              A sleek and advanced web dashboard to conveniently interface with
              and configure DeGore.
            </ProjectGridItem>
          </Section>

          <Section delay={0.3}>
            <ProjectGridItem
              id="dankpods-api"
              title="DankPods API"
              thumbnail={thumbDankAPI}
            >
              An Express REST API used to get random funny quotes from dankpods
              videos.
            </ProjectGridItem>
          </Section>

          <Section delay={0.4}>
            <ProjectGridItem
              id="qckboard-macro-plus"
              title="QckBoard Macro Plus"
              thumbnail={thumbQckBoard}
            >
              A custom-made macro keypad for enterprise and home use (The PCB was designed from scratch).
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.5}>
          <Divider my={6} />
          <Heading fontWeight="600" as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.6}>
            <ProjectGridItem id="scpu" title="SCP United" thumbnail={thumbSCPU}>
              A faithful remaster of the SCP Containment Breach game using
              elements and systems from the cancelled SCP Unity game.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.7}>
          <Divider my={6} />
          <Heading fontWeight="600" as="h3" fontSize={20} mb={4}>
            Past Projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.8}>
            <ProjectGridItem
              id="solarsystem"
              title="Our Solar System"
              thumbnail={thumbSolarSystem}
            >
              An app designed to teach you all about our Solar System.
            </ProjectGridItem>
          </Section>

          <Section delay={0.9}>
            <ProjectGridItem
              id="onablc"
              title="One Night at Baldi's Literature Club"
              thumbnail={thumbONABLC}
            >
              Combining Baldi&apos;s Basics, Doki Doki Literature Club, and Five
              Nights At Freddy&apos;s into one single-player horror experience.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
