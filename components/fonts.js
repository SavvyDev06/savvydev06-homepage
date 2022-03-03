import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        `}
  />
)

export default Fonts
