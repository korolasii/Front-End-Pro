import React, { Component } from 'react'
import './Emoji.css'

export default class Emoji extends Component {
    render() {
        const { emoji, votes, onVote } = this.props;
        return (
            <div className='emojiItem'>
                <span className='emoji' onClick={onVote}>{emoji}</span>
                <span className='voteEmoji'>{votes}</span>
            </div>
        );
    }
}
