import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  return (
    <div className="container mx-auto">
 
    <Header />
    <MainContainer />
    
  
    </div>
  );
}

export default App;
