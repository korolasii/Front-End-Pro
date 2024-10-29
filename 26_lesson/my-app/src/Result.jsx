import React from 'react';
import './Result.css';

export default function Result({ winner, votes }) {
    return (
        <div>
            <h2>Voting results</h2>
            <h3>The winner is:</h3>
            <p className='emojiResult'>{winner}</p>
            <p>Number of votes: {votes}</p>
        </div>
    );
}
