import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  return (
    <div className="container mx-auto px-40">
 
    <Header />
    <MainContainer />

  
    </div>
  );
}

export default App;
