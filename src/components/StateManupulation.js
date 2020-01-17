import React, { Component } from 'react';

class StateManupulation extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome Sabine!',
            count: 0,
        };
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 style={{ alignSelf: 'center' }}>{this.state.message}</h1>
                    <h2 style={{ alignSelf: 'center', marginLeft: '1em' }}>Count - {this.state.count}</h2>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button style={{ marginRight: '1em' }} onClick={() => this.subscribe()}>Subscribe</button>
                    <button style={{ marginRight: '1em' }} onClick={() => this.increment()}>Increment</button>
                    <button style={{ marginRight: '1em' }} onClick={() => this.increment5()}>Increment - 5</button>
                    <button onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        )
    }

    subscribe() {
        this.setState({
            message: 'Thank you for subscribing Sabine!'
        }, () => {
            console.log('Async console => current-message', this.state.message);
        });
        console.log('sync console => current-message', this.state.message);
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1,
        }), () => {
            console.log('incremented-state', this.state);
        });
    }

    increment5() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    reset() {
        this.setState({
            count: 0,
            message: 'Welcome Sabine!',
        }, () => {
            console.log('reset-state', this.state);
        })
    }
}

export default StateManupulation;