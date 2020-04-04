import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import Friend from './components/Friends/Friends';


function App() {
  return (
    <div>
      <Header></Header>
      <Friend></Friend>
    </div>
  );
}

export default App;
