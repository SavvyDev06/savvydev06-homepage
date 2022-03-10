import styled from '@emotion/styled'

const GradientText = styled.span`
  background-image: linear-gradient(45deg, #f3ec78, #af4261);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-size: 32px;
  font-family: 'Pacifico', cursive;
`

// const HelloText = () => {
//   return <GradientText>Hello,</GradientText>
// }

export default GradientText
