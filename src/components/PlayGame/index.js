import {
  PlayGameContainer,
  GameButton,
  GameImage,
  GameResultContainer,
  PlayButton,
  ResultTextParagraph,
} from './styledComponents'

const PlayGame = props => {
  const {
    choicesList,
    resultText,
    reStartGame,
    isGameOn,
    mychoiceAndComputerchoice,
    checkResults,
  } = props

  return isGameOn ? (
    <PlayGameContainer>
      <GameButton
        type="button"
        data-testid="rockButton"
        onClick={() => checkResults(choicesList[0].id)}
      >
        <GameImage
          src={choicesList[0].imageUrl}
          alt={choicesList[0].id}
          key={choicesList[0].id}
        />
      </GameButton>
      <GameButton
        type="button"
        data-testid="scissorsButton"
        onClick={() => checkResults(choicesList[1].id)}
      >
        <GameImage
          src={choicesList[1].imageUrl}
          alt={choicesList[1].id}
          key={choicesList[1].id}
        />
      </GameButton>
      <GameButton
        type="button"
        data-testid="paperButton"
        onClick={() => checkResults(choicesList[2].id)}
      >
        <GameImage
          src={choicesList[2].imageUrl}
          alt={choicesList[2].id}
          key={choicesList[2].id}
        />
      </GameButton>
    </PlayGameContainer>
  ) : (
    <PlayGameContainer>
      <GameResultContainer>
        <ResultTextParagraph playerText>YOU</ResultTextParagraph>
        <GameImage
          src={mychoiceAndComputerchoice[0].imageUrl}
          alt="your choice"
        />
      </GameResultContainer>
      <GameResultContainer>
        <ResultTextParagraph playerText>OPPONENT</ResultTextParagraph>
        <GameImage
          src={mychoiceAndComputerchoice[1].imageUrl}
          alt="opponent choice"
        />
      </GameResultContainer>
      <GameResultContainer>
        <ResultTextParagraph playerText>{resultText}</ResultTextParagraph>
        <PlayButton onClick={reStartGame} type="button" border outline>
          PLAY AGAIN
        </PlayButton>
      </GameResultContainer>
    </PlayGameContainer>
  )
}

export default PlayGame
