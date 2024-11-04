import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Ошибка:', error, errorInfo);
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Что-то пошло не так. Пожалуйста, попробуйте позже.</h1>;
        }

        return this.props.children; 
    }
}

