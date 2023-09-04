import React from 'react';
import logo from './logo.svg';
import './App.css';
import { log } from 'console';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './Rating';



function App() {
  return (
    <div>
      This is APP component
      <Rating value={0} />
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>

  );
} 

export default App;
