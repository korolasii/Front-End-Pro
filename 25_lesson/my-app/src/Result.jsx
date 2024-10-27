import React, { Component } from 'react';
import './Result.css'

export default class Result extends Component {
    render() {
        const { winner, votes } = this.props;
        return (
            <div>
                <h2>Voting results</h2>
                <h3>The winner is:</h3>
                <p className='emojiResult'>{winner}</p>
                <p>Number of votes: {votes}</p>
            </div>
        );
    }
}


