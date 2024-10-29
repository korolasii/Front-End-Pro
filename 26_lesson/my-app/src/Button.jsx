import React from 'react';
import './Button.css';

export default function Button({ className, onClick, text }) {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
}
