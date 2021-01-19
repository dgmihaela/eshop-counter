import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import {useSelector, useDispatch} from 'react-redux';
import {updateCartIsClicked, isClicked} from './slices/flagCartClickedSlice';
import CartContainer from './components/CartContainer';
import {selectProducts, getProducts} from './slices/productsSlice';


const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  //const cartFlagValue = useSelector(isClicked);
  
  const cartFlagValue = useSelector(isClicked);

  const {cartFlagValue} = useSelector((state) => state).flagCartClickedSlice;
  const {value} = useSelector((state) => state).flagIsClickedSlice;

  console.log(value)

  console.log('din app', cartFlagValue)

  return (
    <div className="container mx-auto  py-5">
      <Header />
    <div className='px-10'>
      {cartFlagValue ? <CartContainer /> : <MainContainer />}
    </div>
    </div>
  );
}

export default App;
