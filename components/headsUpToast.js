import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'

function HeadsUpToast() {
  const toast = useToast()
  return (
    //We can programatically trigger a toast courtesy of: https://stackoverflow.com/questions/58314040/how-can-i-show-a-chakra-ui-toast-programmatically
    useEffect(() => {
      toast({
        title: 'Heads up',
        description:
          'This site is still actively being developed!\nMore to come soon.',
        status: 'info',
        duration: 6000,
        isClosable: true
      })
    }, []), // Passing in empty array so this will only get called on mount
    null
  )
}

export default HeadsUpToast
