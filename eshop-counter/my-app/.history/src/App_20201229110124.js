import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  return (
    <div className="container mx-auto">
 
    
      
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
 
  );
}

export default App;
