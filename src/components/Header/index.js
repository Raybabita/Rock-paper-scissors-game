import {
  HeaderContainer,
  HeadingContainer,
  Heading,
  ScoreContainer,
  ScoreParagraph,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <HeadingContainer>
        <Heading>
          Rock <br />
          Paper <br />
          Scissors
        </Heading>
      </HeadingContainer>
      <ScoreContainer>
        <ScoreParagraph textColor>Score</ScoreParagraph>
        <ScoreParagraph textColor>{score}</ScoreParagraph>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
