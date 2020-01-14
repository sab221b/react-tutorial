import React from 'react';

const JSXExample = () => {
    return (
        <div className="jsx-example">
            <h1>This is from JSX</h1>
        </div>
    )
}

const WithoutJSX = () => {
    return (
        React.createElement(
            'div',
            { id: 'no-jsx', className: 'no-jsx' },
            React.createElement(
                'h1',
                { id: 'h1-id', className: 'text-orange' },
                'This is without JSX'
            )
        )
    )
}

export { JSXExample, WithoutJSX }