import './App.css';
import React from 'react';
import TopBar from './components/TopBar';
import BackgroundImage from './components/BackgroundImage';
import Form from './components/Form';
import StoreListings from './components/StoreListings'


function App() {
  return (
    <div className="App">
      <TopBar />
      <br></br>
      <BackgroundImage />
      <Form/>
    <StoreListings />
    </div>
  );
}

export default App;
