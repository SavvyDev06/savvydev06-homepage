import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbDeGore from '../public/images/projects/degore-thumbnail.png'
import thumbSCPU from '../public/images/projects/scpu-thumbnail.png'
import thumbTFC from '../public/images/projects/tfc-thumbnail.png'
import thumbSolarSystem from '../public/images/projects/solarsystem-thumbnail.jpg'
import thumbONABLC from '../public/images/projects/onablc-thumbnail.png'

import HeadsUpToast from '../components/headsUpToast'

const Projects = () => {
  return (
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
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading fontWeight="600" as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <ProjectGridItem id="scpu" title="SCP United" thumbnail={thumbSCPU}>
            A faithful remaster of the SCP Containment Breach game using
            elements and systems from the cancelled SCP Unity game.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading fontWeight="600" as="h3" fontSize={20} mb={4}>
          Past Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <ProjectGridItem
            id="solarsystem"
            title="Our Solar System"
            thumbnail={thumbSolarSystem}
          >
            An app designed to teach you all about our Solar System.
          </ProjectGridItem>
        </Section>

        <Section delay={0.6}>
          <ProjectGridItem
            id="onablc"
            title="One Night at Baldi's Literature Club"
            thumbnail={thumbONABLC}
          >
            Combining Baldi's Basics, Doki Doki Literature Club, and Five Nights
            At Freddy's into one singleplayer horror experience.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
