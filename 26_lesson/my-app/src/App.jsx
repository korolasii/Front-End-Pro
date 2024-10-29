import './App.css';
import React, { useState, useEffect } from 'react';
import Emoji from './Emoji';
import Result from './Result';
import Button from './Button';

const initialVotes = () => {
  const storedVotes = localStorage.getItem('emojiVotes');
  return storedVotes ? JSON.parse(storedVotes) : { "😊": 0, "😂": 0, "😎": 0, "❤️": 0 };
};

export default function App() {
  const [votes, setVotes] = useState(initialVotes);
  const [winner, setWinner] = useState(null);
  const [winnerVotes, setWinnerVotes] = useState(0);

  useEffect(() => {
    localStorage.setItem('emojiVotes', JSON.stringify(votes));
  }, [votes]);

  const handleVote = (emoji) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [emoji]: prevVotes[emoji] + 1,
    }));
  };

  const showResults = () => {
    let maxVotes = -1;
    let winningEmoji = null;

    for (const emoji in votes) {
      if (votes[emoji] > maxVotes) {
        maxVotes = votes[emoji];
        winningEmoji = emoji;
      }
    }

    setWinner(winningEmoji);
    setWinnerVotes(maxVotes);
  };

  const clearResults = () => {
    localStorage.removeItem('emojiVotes');
    setVotes(initialVotes());
    setWinner(null);
  };

  return (
    <div className='page'>
      <h2>Vote for your favorite emoji!</h2>
      <div className='emojiContainer'>
        {Object.keys(votes).map((emoji) => (
          <Emoji key={emoji} emoji={emoji} votes={votes[emoji]} onVote={() => handleVote(emoji)} />
        ))}
      </div>
      <Button className='btnShow' onClick={showResults} text="Show Results" />
      <Button className='btnClear' onClick={clearResults} text="Clear Results" />
      {winner && <Result winner={winner} votes={winnerVotes} />}
    </div>
  );
}
