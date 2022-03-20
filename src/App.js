import {Component} from 'react'
import Header from './components/Header'
import PlayGame from './components/PlayGame'
import Footer from './components/Footer'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isGameOn: true,
    score: 0,
    resultText: 'YOU WON',
    mychoiceAndComputerchoice: [choicesList[0], choicesList[1]],
  }

  getResult = (userChoice, computerChoice) => {
    if (userChoice.id === 'ROCK') {
      switch (computerChoice.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (userChoice.id === 'PAPER') {
      switch (computerChoice.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (computerChoice.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  reStartGame = () => {
    this.setState({isGameOn: true})
  }

  checkResults = id => {
    const {score} = this.state
    const userSelectedChoice = choicesList.filter(
      eachValue => eachValue.id === id,
    )
    console.log(userSelectedChoice)
    const computerSelectedChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    console.log(computerSelectedChoice)

    const result = this.getResult(userSelectedChoice[0], computerSelectedChoice)

    let newScore = score

    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isGameOn: false,
      score: newScore,
      resultText: result,
      mychoiceAndComputerchoice: [
        userSelectedChoice[0],
        computerSelectedChoice,
      ],
    })
  }

  render() {
    const {isGameOn, score, resultText, mychoiceAndComputerchoice} = this.state

    return (
      <div className="app-container">
        <Header score={score} />
        <PlayGame
          checkResults={this.checkResults}
          choicesList={choicesList}
          resultText={resultText}
          isGameOn={isGameOn}
          reStartGame={this.reStartGame}
          mychoiceAndComputerchoice={mychoiceAndComputerchoice}
        />

        <Footer />
      </div>
    )
  }
}

export default App
