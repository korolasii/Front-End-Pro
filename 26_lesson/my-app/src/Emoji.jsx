import React from 'react';
import './Emoji.css';

export default function Emoji({ emoji, votes, onVote }) {
    return (
        <div className='emojiItem'>
            <span className='emoji' onClick={onVote}>{emoji}</span>
            <span className='voteEmoji'>{votes}</span>
        </div>
    );
}
