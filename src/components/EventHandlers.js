import React, { Component } from 'react';
import { render } from '@testing-library/react';

class EventHandlers extends Component {
    constructor() {
        super();
        this.state = {
            eventLabel: ''
        };
    }

    eventHandler1() {
        console.log('clicked button for event handler - 1');
        // console.log('this', this.state) //this is not available in this function
    }

    eventHandler2(eventLabel) {
        console.log('clicked button for event handler - 2');
        console.log('this', this.state);
    }

    eventHandler3(eventLabel) {
        console.log('clicked button for event handler - 3');
        console.log('this', this.state);
    }

    eventHandler4(eventLabel) {
        console.log('clicked button for event handler - 4');
        console.log('this', this.state);
    }
    render() {
        return (
            <div>
                <h1>Event handlers</h1>
                <div style={{ display: 'block' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '0.7em' }}>
                        <p style={{ marginRight: '1em' }}>event handler -1 </p> <button onClick={this.eventHandler1}>click-1</button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '0.7em' }}>
                        <p style={{ marginRight: '1em' }}>event handler -2 </p> <button onClick={() => this.eventHandler2('event2')}>click-1</button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '0.7em' }}>
                        <p style={{ marginRight: '1em' }}>event handler -3 </p> <button onClick={() => this.eventHandler3('event3')}>click-1</button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '0.7em' }}>
                        <p style={{ marginRight: '1em' }}>event handler -4 </p> <button onClick={() => this.eventHandler4()}>click-1</button>
                    </div>
                </div>
            </div >
        )
    }
}

export default EventHandlers;