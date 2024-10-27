import './App.css';
import React, { Component } from 'react'
import Emoji from './Emoji'
import Result from './Result'
import Button from './Button'

const initialVotes = () => {
  const storedVotes = localStorage.getItem('emojiVotes');
  return storedVotes ? JSON.parse(storedVotes) : { "😊": 0, "😂": 0, "😎": 0, "❤️": 0 };
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: initialVotes(),
      winner: null,
      winnerVotes: 0,
    };
  }

  handleVote = (emoji) => {
    this.setState(
      (prevState) => {
        const newVotes = { ...prevState.votes, [emoji]: prevState.votes[emoji] + 1 };
        return { votes: newVotes };
      },
      () => localStorage.setItem('emojiVotes', JSON.stringify(this.state.votes))
    );
  };

  showResults = () => {
    const { votes } = this.state;
    let winner = null;
    let maxVotes = -1;

    for (const emoji in votes) {
      if (votes[emoji] > maxVotes) {
        maxVotes = votes[emoji];
        winner = emoji;
      }
    }

    this.setState({ winner, winnerVotes: maxVotes });
  };

  clearResults = () => {
    localStorage.removeItem('emojiVotes');
    this.setState({ votes: initialVotes(), winner: null });
  };

  render() {
    const { votes, winner, winnerVotes } = this.state;
    return (
      <div className = 'page'>
        <h2>Vote for your favorite emoji!</h2>
        <div className = 'emojiContainer'>
          {Object.keys(votes).map((emoji) => (
            <Emoji key={emoji} emoji={emoji} votes={votes[emoji]} onVote={() => this.handleVote(emoji)} />
          ))}
        </div>
        <Button className = 'btnShow' onClick={this.showResults} text="Show Results" />
          <Button
            className = 'btnClear'
            onClick={this.clearResults}
            text="Clear Results"
          />
        {winner && <Result winner={winner} votes={winnerVotes}/>}
      </div>
    );
  }
}
