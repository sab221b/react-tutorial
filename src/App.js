import React from 'react';
import './App.css';
import SayHello from './components/FunctionalComponent'
import SayHelloClass from './components/ClassComponent';
import { JSXExample, WithoutJSX } from './components/JSXexample';
import StateManupulation from './components/StateManupulation';
import EventHandlers from './components/EventHandlers';

function App() {
  return (
    <div className="App">
      <SayHello myName="Sabine" nickName="Sab"><span>This is a functional component</span></SayHello>
      <SayHelloClass myName="Sabine" realName="Rajesh"><span>This is a class component</span></SayHelloClass>
      <JSXExample />
      <WithoutJSX />
      <StateManupulation />
      <EventHandlers />
    </div>
  );
}

export default App;
