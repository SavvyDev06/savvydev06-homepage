import { Box, Button, Link, useToast } from '@chakra-ui/react'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
// import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

function HeadsUpToast() {
  const toast = useToast()
  return (
    //We can programatically trigger a toast courtesy of: https://stackoverflow.com/questions/58314040/how-can-i-show-a-chakra-ui-toast-programmatically
    useEffect(() => {
      toast({
        title: 'Just in!',
        description: (
          <p>
            DeGore has been featured on the Craft of Code podcast!
            <Box display="flex" mt="2" alignItems="center">
              <Link
                href="https://open.spotify.com/episode/3haJt9oxCMWMdtWepnBAkr?si=bd70d60e785c4b91"
                target="_blank"
              >
                <Button
                  size={'xs'}
                  // mr="1"
                  colorScheme="green"
                  bgColor="black"
                  color="#1ED760"
                  _hover={{
                    bgColor: '#1ED760',
                    color: 'black'
                  }}
                >
                  Open in Spotify &nbsp; <FontAwesomeIcon icon={faSpotify} />
                </Button>
              </Link>
              {/* <Link href="https://apple.co/3Gf4E8w" target="_blank">
                <Button size={'xs'} colorScheme="blackAlpha">
                  Apple Podcasts &nbsp; <FontAwesomeIcon icon={faPodcast} />
                </Button>
              </Link> */}
            </Box>
          </p>
        ),
        status: 'success',
        duration: 9000,
        isClosable: true
      })
    }, []), // Passing in empty array so this will only get called on mount
    null
  )
}

export default HeadsUpToast
