import React from 'react';
import './App.css';
import images from './images';
import Slideshow from './slideshow';

function App() {  
  return (
    <div className="App">
      <Slideshow images={images} />
    </div>
  );
}

export default App;
