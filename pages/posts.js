import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbDeGoreFourYears from '../public/images/blog-thumbs/degore-fouryears.webp'
import thumbDeGoreOneYear from '../public/images/blog-thumbs/degore-oneyear.png'
import thumbDeGoreTrailer from '../public/images/blog-thumbs/degore-trailer.jpg'
import thumbDeGoreTutorial from '../public/images/blog-thumbs/degoretut-thumb.webp'
import thumbDiscordDevPerspective from '../public/images/blog-thumbs/discord-dev-perspective.jpg'
import thumbTfcTrailer from '../public/images/blog-thumbs/tfc-trailer.jpg'
import thumbLinodePod from '../public/images/links/linode-pod.webp'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Celebrating Four Triumphant Years of DeGore"
            thumbnail={thumbDeGoreFourYears}
            href="https://blog.unitedweco.de/celebrating-a-year-of-degore/"
          />
          <GridItem
            title="DeGore | AI-Powered Image Moderation for Communities Worldwide"
            thumbnail={thumbDeGoreTrailer}
            href="https://youtu.be/40D1wtBdxyQ"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Celebrating a year of DeGore"
            thumbnail={thumbDeGoreOneYear}
            href="https://blog.unitedweco.de/celebrating-a-year-of-degore/"
          />
          <GridItem
            title="DeGore | Complete Quickstart Guide & Tutorial"
            thumbnail={thumbDeGoreTutorial}
            href="https://youtu.be/40D1wtBdxyQ"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Discord: A Developer's Perspective"
            thumbnail={thumbDiscordDevPerspective}
            href="https://youtu.be/_iGoVQsJX6Q"
          />
          <GridItem
            title="The Five Chapters | Teaser Trailer"
            thumbnail={thumbTfcTrailer}
            href="https://youtu.be/10tuQNguICA"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={1} gap={6}>
          <GridItem
            title="Podcast Feature: Akamai Cloud (Formerly Linode) Craft of Code"
            thumbnail={thumbLinodePod}
            href="https://spoti.fi/3FQy9fw"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
