import { LinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Link,
  useDisclosure
} from '@chakra-ui/react'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faClock, faPodcast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useRef } from 'react'

function DeGoreDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="purple"
        onClick={onOpen}
        rightIcon={<LinkIcon />}
        size={'sm'}
      >
        More
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'sm'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Featuring DeGore</DrawerHeader>

          <DrawerBody>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={
                  'https://www.linode.com/wp-content/uploads/2022/12/savvas-agisilaou-s3-e5.png'
                }
                alt={
                  'Thumbnail image - How Linode Supported an AI Image Moderation Bot'
                }
              />

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    Podcast
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    Mike Maney &bull; Craft of Code
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={2}
                >
                  How Linode Helped an AI Bot Moderate Images Automatically
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  <Link href="https://spoti.fi/3FQy9fw" target="_blank">
                    <Button size={'xs'} mr="1" colorScheme="teal">
                      Open in Spotify &nbsp;{' '}
                      <FontAwesomeIcon icon={faSpotify} />
                    </Button>
                  </Link>
                  <Link href="https://apple.co/3Gf4E8w" target="_blank">
                    <Button size={'xs'} colorScheme="purple">
                      Apple Podcasts &nbsp; <FontAwesomeIcon icon={faPodcast} />
                    </Button>
                  </Link>
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    <FontAwesomeIcon icon={faClock} /> 15:52
                  </Box>
                </Box>
              </Box>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="solid" onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DeGoreDrawer
