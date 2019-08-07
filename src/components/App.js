import React from 'react';
import { Game } from "./Game"
import './App.css';
import { Interface } from "./Interface"
import { VisualResultsAI } from "./VisualResultsAI"
import { VisualResultsYou } from "./VisualResultsYou"

class App extends React.Component {
  state = {
    games: 0,
    yourChoice: null,
    AIChoice: null,
    one: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
    two: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
    three: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
    four: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
    five: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
    six: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg",
  }
  AIChoice = () => {
    this.setState({
      AIChoice: Math.floor(Math.random() * 6) + 1
    })
  }

  startGame = () => {
    this.setState({
      yourChoice: Math.floor(Math.random() * 6) + 1,
      games: this.state.games + 1
    })

    this.AIChoice()


  }

  clearState = () => {
    this.setState({
      yourChoice: null,
      AIChoice: null,
      games: 0
    })
  }


  render() {
    return <>
      <Interface games={this.state.games} wins={this.state.wins} losses={this.state.losses} clearState={this.clearState} startGame={this.startGame} yourChoice={this.state.yourChoice} AIChoice={this.state.AIChoice} />
      <div className="effects">
        <VisualResultsYou allstates={this.state} /><VisualResultsAI allstates={this.state} />
      </div>
      <Game results={this.state} />

    </>;
  }
}

export default App;

