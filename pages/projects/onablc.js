import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraphMain'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="ONABLC">
      <Container>
        <Title>
          One Night at Baldi&apos;s Literature Club <Badge>2018</Badge>
        </Title>
        <P>
          A 2D game which combines the Baldi&apos;s Basics, Doki Doki Literature
          Club, and Five Nights At Freddy&apos;s games all into one
          single-player comedy horror experience.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website | GameJolt</Meta>
            <Link
              href="https://gamejolt.com/games/onablc/352699"
              target="_blank"
            >
              View on GameJolt <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Website | Itch.io</Meta>
            <Link href="https://savvydev06.itch.io/onablc" target="_blank">
              View on itch.io <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>C++, GameMaker Studio 2 (Game engine)</span>
          </ListItem>
          <ListItem>
            <Meta>Playthrough</Meta>
            <Link
              href="https://www.youtube.com/watch?v=CxXw0EYhj5g"
              target="_blank"
            >
              Watch a celebrity play it on YouTube!{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/CxXw0EYhj5g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <ProjectImage
          src="/images/project-showcase/onablc_01.jpg"
          alt="The official DeGore website"
        />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="//player.bilibili.com/player.html?aid=26828208&bvid=BV1ps411J7Zy&cid=46183501&page=1"
            title="Bilibili video player"
            loading="eager"
            scrolling="no"
            border="0"
            frameBorder="no"
            framespacing="0"
            allowFullScreen="true"
            data-children-count="0"
          >
            {' '}
          </iframe>
        </AspectRatio>
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/D2jl1llP6a4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="//player.bilibili.com/player.html?aid=28372203&bvid=BV1gs41137mq&cid=49078879&page=1"
            title="Bilibili video player"
            loading="eager"
            scrolling="no"
            border="0"
            frameBorder="no"
            framespacing="0"
            allowFullScreen="true"
            data-children-count="0"
          >
            {' '}
          </iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
}

export default Work
