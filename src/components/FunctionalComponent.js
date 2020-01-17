import React from 'react';

const sayHello = (props) => {
    const { myName, nickName } = props; // destructuring props example
    return (
        // div is a necessary wrapper element when using props children
        <div style={{ border: '2px solid darkred' }}>
            <h1 style={{ color: "red" }}>Hello {myName}@{nickName}</h1>
            {props.children}
        </div>
    )
}

export default sayHello;