import React, { Component } from 'react';

class sayHelloClass extends Component {
    render() {
        const { myName, realName } = this.props; // destructuring props
        return (
            // div is a necessary wrapper element when using props children
            <div style={{ border: '2px solid darkred' }}>
                <h1>Hello {myName} a.k.a {realName}!</h1>
                {this.props.children}
            </div>
        );
    }
}

export default sayHelloClass;