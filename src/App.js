import React from 'react';
import './App.css';
import SayHello from './components/FunctionalComponent'
import SayHelloClass from './components/ClassComponent';
import { JSXExample, WithoutJSX } from './components/JSXexample';

function App() {
  return (
    <div className="App">
      <SayHello />
      <SayHelloClass />
      <JSXExample />
      <WithoutJSX />
    </div>
  );
}

export default App;
